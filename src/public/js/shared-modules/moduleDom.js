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
        },

        displaySuccessWithLink: function(messageElement, message, id, formElement) {
            var html =
                '<div class="success-msg" style="background-color:#d4edda; border:1px solid #c3e6cb; color:#155724; padding:10px; margin-top:10px; border-radius:4px;">' +
                message +
                '</div>' +
                '<div style="margin-top:5px;">' +
                '<a href="/public/property-details.html?id=' + id + '">View Property #' + id + '</a>' +
                '</div>';

            var wrapper = document.createElement("div");
            wrapper.innerHTML = html;

            formElement.parentNode.insertBefore(wrapper, formElement.nextSibling);
        }
    };

    window.geolocationSys.registerModule("moduleDom", moduleDom);

})();
