'use strict';

const es6 = require('./es6');

module.exports = new Set([
	...es6,
	...[
		"Array.prototype.includes",
		"String.prototype.padEnd",
		"String.prototype.padStart"
	]
]);
