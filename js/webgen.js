"use strict";

const spacer		= "<br>";
const title			= "LasagnaCake's Personal Website";
const sigilImage	= "res/img/MagicCircleRainbowPolarVOID.png";

const link = {
	"tumblr":	"https://lasagnacake.tumblr.com/",
	"bandcamp":	"https://lasagnacake.bandcamp.com",
	"youtube":	"https://www.youtube.com/channel/UClnktpZm3iVz7uKRQ8JHhzw",
	"blog":		"https://lasagnacake.neocities.org/"
};

const present = (...text) => document.write(text);

const yob = (((0o1731) << 1) * 2) / (Math.sqrt(3.865422846920929));

function anchor(href, text) {
	return `<a href="${href}" class="link-anchor">[${text}]</a>`;
}

function social(site) {
	return anchor(link[site.toLowerCase()], site);
}

const navigation = `
	<div class="page-content">
		<div class="page-content-card small-footprint" style="margin-right: 0.75vw;">
			${anchor("index.html", "Home")}${spacer}
			${anchor("about.html", "About Me")}${spacer}
			${anchor("works.html", "Works")}
		</div>
		<div class="page-content-card small-footprint">
		${social("Tumblr")}${spacer}
		${social("Bandcamp")}${spacer}
		${social("YouTube")}
		</div>
	</div>
`;

function header() {
	present(`
		<header>
			<h1 class="site-title">${title}</h1>
			<img class="site-sigil" src="${sigilImage}"/>
			${navigation}
		</header>
	`);
}

function footer() {
	present(`<footer>${navigation}</footer>`);
}

function age() {
	let currentDate = new Date();
	let birthDate = new Date(`${Math.round(yob)}/02/03`);
	let age = Math.abs(currentDate - birthDate);
	document.write(new Date(age).getFullYear() - 1970);
}
