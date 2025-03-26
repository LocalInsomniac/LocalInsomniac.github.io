document.writeln('<div id = "statuscafe"><div id = "statuscafe-username"></div><div id = "statuscafe-content"></div></div>');

fetch("https://status.cafe/users/cantsleep/status.json").then( r => r.json() ).then( r => {
    if (!r.content.length) {
        return;
    }

    document.getElementById("statuscafe-username").innerHTML = '<a href="https://status.cafe/users/cantsleep" target="_blank">' + r.author + '</a> ' + r.face + ' ' + r.timeAgo;
    document.getElementById("statuscafe-content").innerHTML = r.content;

    var head;

    switch (r.face) {
        default: head = "hunk"; break;
        case "💔": head = "junktroop"; break;
        case "🧐": head = "burge"; break;
        case "😯": head = "junktroop"; break;
        case "🤒": head = "junktroop"; break;
        case "😡": head = "junktroop"; break;
        case "🥳": head = "burge"; break;
        case "🤖": head = "video"; break;
        case "🤩": head = "burge"; break;
        case "❄️": head = "junktroop"; break;
        case "🌧️": head = "junktroop"; break;
        case "✨": head = "video"; break;
        case "🐶": head = "junktroop"; break;
        case "🐱": head = "video"; break;
        case "🍱": head = "video"; break;
        case "🍔": head = "burge"; break;
        case "🥗": head = "burge"; break;
        case "🍙": head = "video"; break;
        case "🍣": head = "video"; break;
        case "🌮": head = "junktroop"; break;
        case "🍶": head = "junktroop"; break;
        case "🍷": head = "junktroop"; break;
        case "🥃": head = "junktroop"; break;
        case "🍸": head = "burge"; break;
        case "🍾": head = "burge"; break;
        case "🍺": head = "junktroop"; break;
        case "🫖": head = "burge"; break;
        case "☕️": head = "burge"; break;
        case "📰": head = "burge"; break;
        case "⛵": head = "burge"; break;
        case "💻": head = "video"; break
        case "✈️": head = "video"; break;
        case "🚄": head = "video"; break;
        case "🌱": head = "burge"; break;
        case "💾": head = "video"; break;
        case "📱": head = "video"; break;
        case "🎤": head = "junktroop"; break;
        case "📺": head = "video"; break;
        case "🎶": head = "video"; break;
        case "🏆": head = "burge"; break;
        case "⛳️": head = "burge"; break;
        case "🏂": head = "burge"; break;
    }

    document.getElementById("statuscafe-character").src = "/assets/heads/" + head + ".png";
    document.getElementById("status").style.display = "flex";
});