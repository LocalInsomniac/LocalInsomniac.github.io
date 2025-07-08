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
                    description = "Casual game with tons of short levels and a high skill ceiling. Dash and concuss your way to the end of each level as quickly as you can.",
                    footer = {"Graphic Design", "Sound Design"},
                    tags = {"wip", "game"},
                },
            },
        },

        {
            category = "tech",

            projects = {
                {
                    id = "caulk",
                    name = "caulk",
                    alt = "Schwungus, 2025",
                    url = "https://github.com/Schwungus/caulk",
                    description = "Convenient Steamworks API wrapper for plain C, since there weren't any left. Supports Steamworks SDK 1.62.",
                    footer = {"In collaboration with <a href=\"https://nonk.dev\">nonk</a>"},
                    tags = {"wip", "library"},
                },
            },
        },

        {
            category = "doom",

            projects = {
                {
                    id = "wolf2wad",
                    name = "wolf2wad",
                    alt = "2025",
                    url = "https://github.com/LocalInsomniac/wolf2wad",
                    description = "Customizable command-line tool that converts Wolfenstein 3D maps into DOOM WADs.",
                    tags = {"tool"},
                },

                {
                    id = "ntmai",
                    name = "Nobody Told Me About id",
                    alt = "2020",
                    url = "/ntmai",
                    description = "Gameplay mod for GZDoom that makes DOOM feel more like a Build Engine game by replicating quirks from Duke Nukem 3D, Blood and Shadow Warrior.",
                    footer = {"<a href=\"https://www.doomworld.com/cacowards/2020/gameplay\">Doomworld 2020 Gameplay Mod Award</a>"},
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

        tool = {
            icon = "/assets/icons/tool.png",
            name = "Tool",
        },

        library = {
            icon = "/assets/icons/library.png",
            name = "Library",
        },

        comic = {
            icon = "/assets/icons/book.png",
            name = "Comic",
        },
    },
});
