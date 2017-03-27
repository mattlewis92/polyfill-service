'use strict';

const default_3_4 = require('./default-3.4');

module.exports = new Set([
	...default_3_4,
	...[
		"Object.getOwnPropertyDescriptor"
	]
]);
