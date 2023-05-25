"use strict";

function createModal(id, text, buttonData = [{text:"OK",action:()=>{}}]) {
	let modal = document.createElement("dialog");
	modal.id = id;
	modal.innerText = text;
	let buttons = document.createElement("div");
	buttons.className = id + "-buttons";
	buttonData.forEach(btn => {
		let button = document.createElement("button");
		button.innerText	= btn.text;
		button.onclick		= (e) => {btn.action(); modal.close()};
		buttons.appendChild(button);
	});
	modal.onclose = (e) => {modal.remove()};
	modal.appendChild(buttons);
	return modal;
}

const Modal = {
	"custom": (id, text, buttonData = [{text:"OK",action:()=>{}}]) => {
		let modal = createModal(id, text, buttonData);
		document.body.appendChild(modal);
		modal.showModal();
		return modal;
	},
	"ok": (id, text, onOK = ()=>{}) => {
		let modal = createModal(
			id,
			text, [{
				text: "OK",
				action: onOK
			}]
		);
		document.body.appendChild(modal);
		modal.showModal();
		return modal;
	},
	"yesNo": (id, text, onYes = ()=>{}, onNo = ()=>{}) => {
		let modal = createModal(
			id,
			text, [{
				text: "YES",
				action: onYes
			}, {
				text: "NO",
				action: onNo
			}
		]);
		document.body.appendChild(modal);
		modal.showModal();
		return modal;
	},
	"yesNoCancel": (id, text, onYes = ()=>{}, onNo = ()=>{}, onCancel = ()=>{}) => {
		let modal = createModal(
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
		document.body.appendChild(modal);
		modal.showModal();
		return modal;
	}
};