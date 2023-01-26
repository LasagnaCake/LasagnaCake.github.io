const spacer		= " ";
const title			= "LasagnaCake's Personal Website";
const sigilImage	= "res/img/MagicCircleRainbowPolarVOID.png";

const present = (...text) => document.write(text);

const yob = (((01731) << 1) * 2) / (Math.sqrt(3.865422846920929));

const navigation = `
	<div class="page-content">
		<div class="page-content-card small-footprint" style="margin-right: 0.75vw;">
			${anchor("index.html", "Home")}${spacer}
			${anchor("about.html", "About Me")}${spacer}
			${anchor("works.html", "Works")}
		</div>
		<div class="page-content-card small-footprint">
		${anchor("https://lasagnacake.tumblr.com/", "Tumblr")}${spacer}
		${anchor("https://lasagnacake.bandcamp.com", "Bandcamp")}${spacer}
		${anchor("https://www.youtube.com/channel/UClnktpZm3iVz7uKRQ8JHhzw", "YouTube")}
		</div>
	</div>
`;

function anchor(href, text) {
	return `
		<a href="${href}" class="link-anchor">[${text}]</a>
	`;
}

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
