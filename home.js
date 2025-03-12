document.addEventListener("DOMContentLoaded", () => {
    const set = (text, opacity = 1) => {
        return () => {
            const catalogueDescription = document.getElementById("catalogue-description");
            
            catalogueDescription.textContent = text;
            catalogueDescription.style.opacity = opacity;
        };
    };

    const reset = set("Click on an icon", 0.5);

    const catalogueProjects = document.getElementById("catalogue-projects");

    catalogueProjects.onmouseover = set("Projects");
    catalogueProjects.onmouseout = reset;

    const catalogueSchwungus = document.getElementById("catalogue-schwungus");

    catalogueSchwungus.onmouseover = set("Schwungus");
    catalogueSchwungus.onmouseout = reset;
});
