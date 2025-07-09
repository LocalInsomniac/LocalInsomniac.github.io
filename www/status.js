fetch("https://status.cafe/users/cantsleep/status.json")
    .then((r) => r.json())
    .then((r) => {
        if (!r.content.length) {
            return;
        }

        document.getElementById("statuscafe-username").innerHTML =
            '<a href="https://status.cafe/users/cantsleep" target="_blank">' +
            r.author +
            "</a> " +
            r.face +
            " " +
            r.timeAgo;
        document.getElementById("statuscafe-content").innerHTML = r.content;

        var head;
        switch (r.face) {
            default:
                head = "hunk";
                break;
            case "💔":
            case "😯":
            case "🤒":
            case "😡":
            case "❄️":
            case "🌧️":
            case "🐶":
            case "🌮":
            case "🍶":
            case "🍷":
            case "🥃":
            case "🍺":
            case "🎤":
            case "💥":
                head = "junktroop";
                break;
            case "🧐":
            case "🥳":
            case "🤩":
            case "🍔":
            case "🥗":
            case "🍸":
            case "🍾":
            case "🫖":
            case "☕️":
            case "📰":
            case "⛵":
            case "🌱":
            case "🏆":
            case "⛳️":
            case "🏂":
            case "🍄":
                head = "burge";
                break;
            case "🤖":
            case "✨":
            case "🐱":
            case "🍱":
            case "🍙":
            case "🍣":
            case "💻":
            case "✈️":
            case "🚄":
            case "💾":
            case "📱":
            case "📺":
            case "🎶":
            case "💿":
                head = "video";
                break;
        }

        document.getElementById("status-head").src =
            "/assets/heads/" + head + ".png";
        document.getElementById("status").style.display = "flex";
    });
