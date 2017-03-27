'use strict';

const default_3_5 = require('./default-3.5');

module.exports = new Set([
	...default_3_5,
	...[
		"Map",
		"Set"
	]
]);
