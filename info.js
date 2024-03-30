document.addEventListener("DOMContentLoaded", function (event) { 
	document.getElementById("lastUpdated").appendChild(document.createTextNode(document.lastModified));

	let gang = document.getElementById("gang");
	const d = new Date();

	switch (d.getHours() % 3) {
		case 0:
			gang.src = "/assets/gang_hunk.png";

			break;
		
		case 1:
			gang.src = "/assets/gang_gilbert.png";

			break;
	}
	
});