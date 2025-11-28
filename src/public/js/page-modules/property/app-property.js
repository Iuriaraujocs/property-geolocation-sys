document.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("propertyForm");
    var loading = document.getElementById("loading");
    var message = document.getElementById("message");

    var property = window.geolocationSys.getModule("moduleProperty");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        property.createOrUpdate(form, loading, message);
    });
//teste
});
