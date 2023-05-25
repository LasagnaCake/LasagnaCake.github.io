"use strict";

class Modal {
	static create(id, buttonData = [{text:"OK",action:()=>{}}]) {
		// Create modal
		let modal = document.createElement("dialog");
		modal.id = id;
		// Create modal's content div
		let content = document.createElement("div");
		content.classList.add(id + "-content");
		// Create buttons div
		let buttons = document.createElement("div");
		buttons.classList.add(id + "-buttons");
		// Create modal buttons
		buttonData.forEach(btn => {
			let button = document.createElement("button");
			button.innerText	= btn.text;
			button.onclick		= (e) => {btn.action(); modal.close()};
			buttons.appendChild(button);
		});
		// Set operation
		modal.onclose = (e) => {modal.remove()};
		// Append divs
		modal.appendChild(content);
		modal.appendChild(document.createElement("br"));
		modal.appendChild(buttons);
		// Return modal & content div
		return [modal, content];
	}

	static custom(id, buttonData = [{text:"OK",action:()=>{}}]) {
		let [modal, content] = this.create(id, buttonData);
		document.body.appendChild(modal);
		modal.showModal();
		return [modal, content];
	}

	static ok(id, onOK = ()=>{}) {
		return this.custom(
			id, [{
				text: "OK",
				action: onOK
			}]
		);
	}

	static yesNo(id, onYes = ()=>{}, onNo = ()=>{}) {
		return this.custom(
			id, [{
				text: "YES",
				action: onYes
			}, {
				text: "NO",
				action: onNo
			}
		]);
	}

	static yesNoCancel(id, onYes = ()=>{}, onNo = ()=>{}, onCancel = ()=>{}) {
		return this.custom(
			id, [{
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
}