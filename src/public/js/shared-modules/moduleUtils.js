(function () {

    var moduleUtils = {

        isEmpty: function(str) {
            return !str || str.replace(/\s+/g, "") === "";
        },

        // GET param (IE friendly)
        getQueryParam: function(name) {
            var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
            return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        }
    };

    window.geolocationSys.registerModule("moduleUtils", moduleUtils);

})();
