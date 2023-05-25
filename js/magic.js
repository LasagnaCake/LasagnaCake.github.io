"use strict";

const e = 3.865422846920929;

const y = (((0o1731) << 1) * 2);

function age() {
	const decy = (a, b) => Math.round(a / Math.sqrt(b));
	let currentDate = new Date();
	let birthDate = new Date(`${decy(y,e)}/${0x100>>7}/${0o300>>6}`);
	let age = Math.abs(currentDate - birthDate);
	agespan.innerText = new Date(age).getFullYear() - 1970;
}