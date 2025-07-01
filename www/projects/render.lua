render("projects/_projects.html", "projects/index.html", {
    categories = {
        {
            category = "original",

            projects = {
                {
                    id = "dcb",
                    name = "Dude Called Barry",
                    alt = "Mightcer, 2025",
                    url = "https://store.steampowered.com/app/3719890",
                    description = "A casual game with tons of short levels and a high skill ceiling. Dash and concuss your way to the end of each level as fast as you can.<br /><br />I designed Barry and the sound effects.",
                    tags = {"wip", "game"},
                },
            },
        },

        {
            category = "doom",

            projects = {
                {
                    id = "ntmai",
                    name = "Nobody Told Me About id",
                    alt = "2020",
                    url = "/ntmai",
                    description = "A gameplay mod for GZDoom that makes DOOM feel more like a Build Engine game by replicating quirks from Duke Nukem 3D, Blood and Shadow Warrior.<br /><br />Won a Gameplay Mod Award on Doomworld's <a href=\"https://www.doomworld.com/cacowards/2020/gameplay\">2020 Cacowards</a>.",
                    tags = {"game"},
                },
            },
        },
    },

    tags = {
        wip = {
            icon = "/assets/icons/wip.png",
            name = "Work in Progress",
        },

        game = {
            icon = "/assets/icons/game.png",
            name = "Game",
        },

        comic = {
            icon = "/assets/icons/book.png",
            name = "Comic",
        },
    },
});
