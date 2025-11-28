(function () {

    function requestGET(url, callbackSuccess, callbackError) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                try {
                    var json = JSON.parse(xhr.responseText);
                    callbackSuccess(json);
                } catch (e) {
                    callbackError("Error processing the server response.");
                }
            }
        };

        xhr.onerror = function() {
            callbackError("Request Error.");
        };

        xhr.send();
    }

    function requestPOST(url, formData, callbackSuccess, callbackError) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                try {
                    var json = JSON.parse(xhr.responseText);
                    callbackSuccess(json);
                } catch (e) {
                    callbackError("Error processing the server response.");
                }
            }
        };

        xhr.onerror = function() {
            callbackError("Request Error.");
        };

        xhr.send(formData);
    }

    window.geolocationSys.registerModule("moduleApi", {
        get: requestGET,
        post: requestPOST
    });

})();
