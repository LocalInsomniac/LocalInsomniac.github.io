document.addEventListener("DOMContentLoaded", () => {
    const set = (text) => { return () => { document.getElementById("catalogue-description").textContent = text; }; };
    const reset = set("Click on an icon!");

    const catalogueProjects = document.getElementById("catalogue-projects");
    catalogueProjects.onmouseover = set("Projects");
    catalogueProjects.onmouseout = reset;

    const catalogueSchwungus = document.getElementById("catalogue-schwungus");
    catalogueSchwungus.onmouseover = set("Schwungus Software");
    catalogueSchwungus.onmouseout = reset;
});
