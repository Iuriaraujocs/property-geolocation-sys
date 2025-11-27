(function () {

    var moduleProperty = {

        createOrUpdate: function(form, loading, message) {

            var dom = window.geolocationSys.getModule("moduleDom");
            var api = window.geolocationSys.getModule("moduleApi");

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
                        dom.displayMessage(message, response.message || "Unexpected Error.");
                        return;
                    }

                    window.location.href = response.redirect;
                },
                function(errMsg) {
                    dom.toggleLoading(loading, false);
                    dom.displayMessage(message, errMsg);
                }
            );
        }
    };

    window.geolocationSys.registerModule("moduleProperty", moduleProperty);

})();
