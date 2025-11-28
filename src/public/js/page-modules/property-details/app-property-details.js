document.addEventListener("DOMContentLoaded", function() {

    var loading = document.getElementById("loading");
    var message = document.getElementById("message");
    var details = window.geolocationSys.getModule("modulePropertyDetails");

    var id = getParam("id");
    if (!id) {
        message.innerText = "Invalid ID.";
        return;
    }

    details.loadDetails(id, loading, message); // load details
    details.loadNotes(id, loading, message); // load notes


    var noteForm = document.getElementById("addNoteForm");

    noteForm.addEventListener("submit", function(e) {
        e.preventDefault();
        details.addNote(noteForm, loading, message, function() {
            details.loadNotes(id, loading, message); // reload notes
            document.getElementById("noteText").value = "";
        });
    });

    // GET param (IE friendly)
    function getParam(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

});
