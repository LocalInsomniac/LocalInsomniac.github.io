document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("lastUpdated")
        .appendChild(
            document.createTextNode("Last updated: " + document.lastModified)
        );
});
