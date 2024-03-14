document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById("lastUpdated").appendChild(document.createTextNode(document.lastModified));
	
	document.querySelectorAll("img[modal]").forEach((img) => {
		var content = document.getElementById("modal-preview");
		
		img.addEventListener("click", () => {
			content.style.opacity = "1";
			content.style.zIndex = "100";
			document.documentElement.style.overflow = "hidden";
			content.innerHTML = "";
			content.appendChild(new Image()).src = img.src;
		});
		
		content.addEventListener("click", () => {
			content.style.opacity = "";
			content.style.zIndex = "";
			document.documentElement.style.overflow = "";
		});
	});
});