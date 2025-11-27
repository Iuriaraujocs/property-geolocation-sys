(function () {

    var moduleDom = {

        toggleLoading: function(element, isLoading) {
            element.style.display = isLoading ? "block" : "none";
        },

        displayMessage: function(element, msg) {
            element.innerText = msg;
        },

        clearMessage: function(element) {
            element.innerText = "";
        }
    };

    window.geolocationSys.registerModule("moduleDom", moduleDom);

})();
