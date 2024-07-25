const modalPopup = document.createElement("div");

modalPopup.id = "modal-popup";

modalPopup.onclick = () => {
	modalPopup.textContent = "";
	modalPopup.className = "";
	modalPopup.style.cursor = "auto";
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
		modalPopup.style.cursor = "zoom-out";

		let biggie;
		let dataset = modal.dataset;
		let image = dataset.modalImage;

		if (image) {
			biggie = document.createElement("img");
			biggie.src = image;
		} else {
			let video = dataset.modalVideo;

			if (video) {
				biggie = document.createElement("video");
				biggie.src = video;
				biggie.autoplay = true;
				biggie.controls = true;
				biggie.style.cursor = "auto";
			} else {
				biggie = document.createElement(modal.tagName);
				
				for (const attr of modal.attributes) {
					if (!(attr.name.startsWith("data-modal-") || attr.name == "class")) {
						biggie.attributes.setNamedItem(attr.cloneNode());
					}
				}

				biggie.style.cursor = "zoom-out";
			}
		}

		modalPopup.appendChild(biggie);

		let text = dataset.modalText;

		if (text) {
			let para = document.createElement("p");
			
			para.textContent = text;
			modalPopup.appendChild(para);
		}
	};
}