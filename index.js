'use strict';
var stripAnsi = require('strip-ansi');

module.exports = function (str, opts) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};

	var stripAnsiCodes = opts.stripAnsiCodes || true;	
	var splitRegex = opts.separator || /\S+/g;

	var words = stripAnsiCodes ? stripAnsi(str).match(splitRegex) : str.match(splitRegex);

	return words.reduce(function(p,c){
		return c.length > p.length ? c : p;
	}).length;
};
