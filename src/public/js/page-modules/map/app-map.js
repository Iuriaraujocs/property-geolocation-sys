document.addEventListener("DOMContentLoaded", function() {
    var utils = window.geolocationSys.getModule("moduleUtils");
    var mapModule = window.geolocationSys.getModule("moduleMap");
    var dom = window.geolocationSys.getModule("moduleDom");

    var loading = document.getElementById("loading");
    var message = document.getElementById("message");

    var id = utils.getQueryParam("id");
    if (!id) {
        dom.displayMessage(message, "No property ID provided.");
        return;
    }

    dom.toggleLoading(loading, true);

    // Load data property + notes
    mapModule.loadProperty(
        id,
        function (property, notes) {
            dom.toggleLoading(loading, false);

            // Create map
            var map = mapModule.initMap(property.latitude, property.longitude);

            // Popup content
            var popupHtml = mapModule.buildPopupContent(property, notes);

            // Add Marker
            mapModule.addMarker(map, property.latitude, property.longitude, popupHtml);
        },
        function (err) {
            dom.toggleLoading(loading, false);
            dom.displayMessage(message, err);
        }
    );
});
