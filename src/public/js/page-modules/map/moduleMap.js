(function () {

    var moduleMap = {

        loadProperty: function (id, onSuccess, onError) {
            var api = window.geolocationSys.getModule("moduleApi");

            api.get(
                "../api/property.php?id=" + id + '&withNotes=true',
                function (response) {
                    if (!response.success) {
                        onError(response.message || "Error loading property.");
                        return;
                    }

                    // GET NOTES FROM response.data.notes
                    var notes = response.data.notes || [];

                    onSuccess(response.data, notes);
                },
                function (errMsg) {
                    onError(errMsg);
                }
            );
        },

        initMap: function (lat, lng) {
            var map = L.map('map').setView([lat, lng], 15);

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                { maxZoom: 19 }
            ).addTo(map);

            return map;
        },

        addMarker: function (map, lat, lng, popupContent) {
            var m = L.marker([lat, lng]).addTo(map);
            m.bindPopup(popupContent);
        },

        buildPopupContent: function (property, notes) {

            var notesText = "No notes.";
            if (notes && notes.length > 0) {
                notesText = "";
                for (var i = 0; i < notes.length; i++) {
                    notesText += "- " + notes[i].note + "<br>";
                }
            }

            return "<b>" + property.name + "</b><br>" +
                (property.address || "") + "<br><br>" +
                "<b>Notes:</b><br>" +
                notesText;
        }

    };

    window.geolocationSys.registerModule("moduleMap", moduleMap);

})();
