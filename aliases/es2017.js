'use strict';

const es7 = require('./es7');

module.exports = new Set([
	...es7,
	...[
		"Object.entries",
		"Object.values"
	]
]);
