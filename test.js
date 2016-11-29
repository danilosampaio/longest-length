'use strict';
var assert = require('assert');
var longestLength = require('./');

describe('longest-length', function(){
	it('should return the longest word length', function () {
		assert.strictEqual(longestLength('Supercalifragilisticexpialidocious is long word'), 34);
	});

	it('should handle correctly ansi escape codes', function () {
		assert.strictEqual(longestLength('\u001b[1mthis\u001b[22m is a dummy text'), 5);
	});

	it('should handle correctly new lines', function () {
		assert.strictEqual(longestLength('this is a dum\nmy text'), 4);
	});

	it('should count astral characters correctly', function () {
		assert.strictEqual(longestLength('🦄🍺🦄'), 3);
		assert.strictEqual(longestLength('🍺🦄\n🦄'), 2);
		assert.strictEqual(longestLength('zzz🦄\nzzzzz🦄\nzzz'), 6);
	});
});
