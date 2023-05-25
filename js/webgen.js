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

const createModal = (id, text, buttonData = [{text:"ok",action:()=>{}}]) => {
	let modal = document.createElement("dialog");
	modal.id = id;
	modal.innerText = text;
	let buttons = document.createElement("div");
	buttons.className = id + "-buttons";
	buttonData.forEach(btn => {
		let button = document.createElement("button");
		button.innerText	= bd.text;
		button.onclick		= (e) => {btn.action(); modal.close()};
		buttons.appendChild(button);
	});
	modal.onclose = (e) => {modal.remove()};
	modal.appendChild(buttons);
	document.body.appendChild(modal);
	modal.showModal();
	return modal;
}

const Modal = {
	"custom": createModal,
	"yesNo": (id, text, onYes = ()=>{}, onNo = ()=>{}) => {
		return createModal(
			id,
			text, [{
				text: "YES",
				action: onYes
			}, {
				text: "NO",
				action: onNo
			}
		]);
	},
	"yesNoCancel": (id, text, onYes = ()=>{}, onNo = ()=>{}, onCancel = ()=>{}) => {
		return createModal(
			id,
			text, [{
				text: "YES",
				action: onYes
			}, {
				text: "NO",
				action: onNo
			}, {
				text: "CANCEL",
				action: onCancel
			}
		]);
	}
};