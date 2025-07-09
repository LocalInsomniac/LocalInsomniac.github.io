document.addEventListener("DOMContentLoaded", () => {
    const set = (id, text) => {
        const elt = document.getElementById(id);
        if (!elt) {
            console.warn("MISSING LINK 'id=" + id + "'");
            return;
        }

        elt.onmouseover = () => {
            const linksDescription =
                document.getElementById("links-description");

            linksDescription.textContent = text;
            linksDescription.style.opacity = 1;
        };
    };

    set("links-email", "Email (me@cantsleep.cc)");
    set("links-github", "GitHub (LocalInsomniac)");
    set("links-discord", "Discord (cant_sleep)");
    set("links-twitter", "Twitter (@_LocalInsomniac)");
});
