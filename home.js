document.addEventListener("DOMContentLoaded", () => {
    const set = (text) => {
        return () => {
            const linksDescription =
                document.getElementById("links-description");

            linksDescription.textContent = text;
            linksDescription.style.opacity = 1;
        };
    };

    document.getElementById("links-email").onmouseover = set(
        "Email (me@cantsleep.cc)"
    );
    document.getElementById("links-github").onmouseover = set(
        "GitHub (LocalInsomniac)"
    );
    document.getElementById("links-discord").onmouseover = set(
        "Discord (cant_sleep)"
    );
    document.getElementById("links-twitter").onmouseover = set(
        "Twitter (@_LocalInsomniac)"
    );
    document.getElementById("links-bluesky").onmouseover = set(
        "Bluesky (@cantsleep.cc)"
    );
    document.getElementById("links-newgrounds").onmouseover = set(
        "Newgrounds (@LocalInsomniac)"
    );
});
