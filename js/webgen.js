"use strict";

const e = 3.865422846920929;

const y = (((0o1731) << 1) * 2);

function age() {
	const decy = (a, b) => Math.round(a / Math.sqrt(b));
	let currentDate = new Date();
	let birthDate = new Date(`${decy(y,e)}/${0x100>>7}/${0x180>>7}`);
	let age = Math.abs(currentDate - birthDate);
	agespan.innerText = new Date(age).getFullYear() - 1970;
}

const Modal = {
	"yesNo": (id, text, onYes = ()=>{}, onNo = ()=>{}) => {
		let modal = document.createElement("dialog");
		let buttons = document.createElement("div");
		let yes = document.createElement("button");
		let no = document.createElement("button");
		modal.id = id;
		modal.innerText = text;
		yes.innerText = "Yes";
		no.innerText = "No";
		yes.onclick = (e) => {onYes(e); modal.close();};
		no.onclick = (e) => {onNo(e); modal.close();};
		modal.onclose = (e) => {modal.remove();};
		buttons.appendChild(yes);
		buttons.appendChild(no);
		modal.appendChild(buttons);
		document.body.appendChild(modal);
		modal.showModal();
		return modal;
	},
	"yesNoCancel": (id, text, onYes = ()=>{}, onNo = ()=>{}, onCancel = ()=>{}) => {
		let modal = document.createElement("dialog");
		let buttons = document.createElement("div");
		let yes = document.createElement("button");
		let no = document.createElement("button");
		let cancel = document.createElement("button");
		modal.id = id;
		modal.innerText = text;
		buttons.className = "modal-buttons";
		yes.innerText = "Yes";
		no.innerText = "No";
		cancel.innerText = "Cancel";
		yes.onclick = (e) => {onYes(e); modal.close();};
		no.onclick = (e) => {onNo(e); modal.close();};
		cancel.onclick = (e) => {onCancel(e); modal.close();};
		modal.onclose = (e) => {modal.remove();};
		buttons.appendChild(yes);
		buttons.appendChild(no);
		buttons.appendChild(cancel);
		modal.appendChild(buttons);
		document.body.appendChild(modal);
		modal.showModal();
		return modal;
	}
};