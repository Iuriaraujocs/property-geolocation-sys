(function () {

    var moduleUtils = {

        isEmpty: function(str) {
            return !str || str.replace(/\s+/g, "") === "";
        }
    };

    window.geolocationSys.registerModule("moduleUtils", moduleUtils);

})();
