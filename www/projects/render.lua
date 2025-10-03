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
                    image = "dcb",
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
                    image = "caulk",
                    description = "Convenient Steamworks API wrapper for plain C, since there weren't any left. Supports Steamworks SDK 1.62.",
                    footer = {"In collaboration with <a href=\"https://nonk.dev\">nonk</a>"},
                    tags = {"library"},
                },
            },

            misc = {
                {
                    name = "S_fixed",
                    alt = "Schwungus, 2025",
                    url = "https://github.com/Schwungus/S_fixed",
                    description = "Q16.16 fixed-point math library for C",
                    tags = {"library"},
                },

                {
                    name = "PNEngine",
                    alt = "Schwungus, 2022",
                    url = "https://github.com/Schwungus/PNEngine",
                    description = "Customizable 3D engine for GameMaker",
                    tags = {"engine"},
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
                    image = "wolf2wad",
                    description = "Customizable command-line tool that converts Wolfenstein 3D maps into DOOM WADs.",
                    tags = {"tool"},
                },

                {
                    id = "ntmai",
                    name = "Nobody Told Me About id",
                    alt = "2020",
                    url = "/ntmai",
                    image = "ntmai",
                    description = "Gameplay mod for GZDoom that makes DOOM feel more like a Build Engine game by replicating quirks from Duke Nukem 3D, Blood and Shadow Warrior.",
                    footer = {"<a href=\"https://www.doomworld.com/cacowards/2020/gameplay\">Doomworld 2020 Gameplay Mod Award</a>"},
                    tags = {"mod"},
                },
            },

            misc = {
                {
                    name = "PNP",
                    alt = "2024",
                    url = "https://github.com/LocalInsomniac/PNP",
                    description = "Universal CoD Zombies perks and powerups for GZDoom",
                    tags = {"mod"},
                },

                {
                    name = "ParryMe",
                    alt = "2023",
                    url = "https://github.com/LocalInsomniac/ParryMe",
                    description = "Universal parrying mod for GZDoom",
                    tags = {"mod"},
                },

                {
                    name = "FadeMe",
                    alt = "2023",
                    url = "https://github.com/LocalInsomniac/FadeMe",
                    description = "Universal corpse fading mod for GZDoom",
                    tags = {"mod"},
                },

                {
                    name = "FrameMe",
                    alt = "2023",
                    url = "https://github.com/LocalInsomniac/FrameMe",
                    description = "Universal freezecam mod for GZDoom",
                    tags = {"mod"},
                },
            },
        },
    },

    tags = {
        wip = {
            icon = "/assets/icons/wip.png",
            name = "Work in Progress",
        },

        mod = {
            icon = "/assets/icons/game.png",
            name = "Mod",
        },

        game = {
            icon = "/assets/icons/game.png",
            name = "Game",
        },

        engine = {
            icon = "/assets/icons/engine.png",
            name = "Engine",
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
