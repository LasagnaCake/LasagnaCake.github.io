"use strict";

const present = (...text) => document.write(text);

const yob = (((0o1731) << 1) * 2) / (Math.sqrt(3.865422846920929));

function age() {
	let currentDate = new Date();
	let birthDate = new Date(`${Math.round(yob)}/02/03`);
	let age = Math.abs(currentDate - birthDate);
	document.write(new Date(age).getFullYear() - 1970);
}
