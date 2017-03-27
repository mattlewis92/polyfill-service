'use strict';

const default_3_3 = require('./default-3.3');

module.exports = new Set([
	...default_3_3,
	...[
		"Array.from",
		"Array.of",
		"Array.prototype.fill",
		"Element.prototype.after",
		"Element.prototype.append",
		"Element.prototype.before",
		"Element.prototype.prepend",
		"Element.prototype.remove",
		"Element.prototype.replaceWith",
		"Node.prototype.contains",
		"Number.isNaN",
		"Promise",
		"String.prototype.endsWith",
		"String.prototype.startsWith",
		"URL",
		"location.origin"
	]
]);
