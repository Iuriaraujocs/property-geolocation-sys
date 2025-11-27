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
                    callbackError("Erro ao processar a resposta.");
                }
            }
        };

        xhr.onerror = function() {
            callbackError("Falha na requisição.");
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
                    callbackError("Erro ao processar a resposta do servidor.");
                }
            }
        };

        xhr.onerror = function() {
            callbackError("Falha na requisição.");
        };

        xhr.send(formData);
    }

    window.geolocationSys.registerModule("moduleApi", {
        get: requestGET,
        post: requestPOST
    });

})();
