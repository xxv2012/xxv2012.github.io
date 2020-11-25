function ControlSearch() {
    if (document.getElementById("Search").hidden == true) {
        document.getElementById("Search").hidden = false;
        document.getElementById("Search").focus();

    } else {
        document.getElementById("Search").hidden = true;

    }
}