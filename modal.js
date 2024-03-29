const modalPopup = document.createElement("div");

modalPopup.id = "modal-popup";
modalPopup.style.cursor = "zoom-out";

modalPopup.onclick = () => {
	modalPopup.textContent = "";
	modalPopup.className = "";
};

document.body.appendChild(modalPopup);

const modals = document.getElementsByClassName("modal");

for (const modal of modals) {
	modal.addEventListener("click", makeShowModal(modal));
	modal.style.cursor = "zoom-in";
}

function makeShowModal(modal) {
	return (ev) => {
    	modalPopup.className = "up";

		const biggie = document.createElement(modal.tagName);
		
		for (const attr of modal.attributes) {
    		if (attr.name.startsWith("data-modal-")) {
        		// TODO TODO TODO.
        		const special = attr.name.split("data-modal-", 1)[1];
    		} else if (attr.name != "class") {
        		biggie.attributes.setNamedItem(attr.cloneNode());
			}
		}

		biggie.style.cursor = "";
		modalPopup.appendChild(biggie);
	};
}
