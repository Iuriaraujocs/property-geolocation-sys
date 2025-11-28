(function () {

    var modulePropertyDetails = {

        loadDetails: function(id, loading, message) {

            var api = window.geolocationSys.getModule("moduleApi");
            var dom = window.geolocationSys.getModule("moduleDom");

            dom.clearMessage(message);
            dom.toggleLoading(loading, true);

            api.get(
                "../api/property.php?id=" + id,
                function(response) {

                    dom.toggleLoading(loading, false);

                    if (!response.success) {
                        dom.displayMessage(message, response.message || "Error loading property.");
                        return;
                    }

                    modulePropertyDetails.populateDetails(response.data);
                    modulePropertyDetails.createMapLink(id);

                },
                function(errMsg) {
                    dom.toggleLoading(loading, false);
                    dom.displayMessage(message, errMsg);
                }
            );
        },

        loadNotes: function(propertyId, loading, message) {

            var api = window.geolocationSys.getModule("moduleApi");
            var dom = window.geolocationSys.getModule("moduleDom");

            dom.clearMessage(message);
            dom.toggleLoading(loading, true);

            api.get(
                "../api/notes.php?property_id=" + propertyId,
                function(response) {

                    dom.toggleLoading(loading, false);

                    if (!response.success) {
                        dom.displayMessage(message, response.message || "Error loading notes.");
                        return;
                    }

                    modulePropertyDetails.populateNotes(response.data);
                },
                function(errMsg) {
                    dom.toggleLoading(loading, false);
                    dom.displayMessage(message, errMsg);
                }
            );
        },

        populateDetails: function(data) {
            document.getElementById("p-name").innerText  = data.name || "";
            document.getElementById("p-lat").innerText   = data.latitude || "";
            document.getElementById("p-lng").innerText   = data.longitude || "";
            document.getElementById("p-extra").innerText = data.extra_field || "";
            document.getElementById("notePropertyId").value = data.id;
        },

        populateNotes: function(notes) {
            var ul = document.getElementById("notesList");
            ul.innerHTML = "";

            if (!notes || notes.length === 0) {
                ul.innerHTML = "<li>No notes yet.</li>";
                return;
            }

            for (var i = 0; i < notes.length; i++) {
                var li = document.createElement("li");
                li.innerText = notes[i].note;
                ul.appendChild(li);
            }
        },

        createMapLink: function(propertyId) {
            var container = document.getElementById("mapLinkContainer");
            if (!container) {
                return;
            }

            var html =
                '<a href="/public/map.html?id=' +
                propertyId +
                '&withNotes=true" style="font-weight:bold;">' +
                'Map View' +
                '</a>';

            container.innerHTML = html;
        },

        addNote: function(form, loading, message, callback) {

            var api = window.geolocationSys.getModule("moduleApi");
            var dom = window.geolocationSys.getModule("moduleDom");

            dom.clearMessage(message);
            dom.toggleLoading(loading, true);

            var formData = new FormData(form);
            var url = form.getAttribute("action");

            api.post(
                url,
                formData,
                function(response) {
                    dom.toggleLoading(loading, false);

                    if (!response.success) {
                        dom.displayMessage(message, response.message || "Error saving note.");
                        return;
                    }

                    callback(); // reload notes
                },
                function(errMsg) {
                    dom.toggleLoading(loading, false);
                    dom.displayMessage(message, errMsg);
                }
            );
        }
    };

    window.geolocationSys.registerModule("modulePropertyDetails", modulePropertyDetails);
})();
