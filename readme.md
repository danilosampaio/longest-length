# longest-length [![Build Status](https://travis-ci.org/danilosampaio/longest-length.svg?branch=master)](https://travis-ci.org/danilosampaio/longest-length)

> Get the length of the longest word in a string.
> It also correctly calculates the length of the words containing ANSI escape codes and astral symbols.


## Install

```
$ npm install --save longest-length
```


## Usage

```js
var longestLength = require('longest-length');

longestLength('Supercalifragilisticexpialidocious is long word')
//=> 34


longestLength('\u001b[1mthis\u001b[22m is a dummy text')
//=> 5

longestLength('🦄🍺🦄')
//=> 3

```


## API

### longestLength(input, [options])

#### input

*Required*  
Type: `string`


#### options

##### stripAnsiCodes

Type: `boolean`  
Default: `true`

Get the real length of a string.


##### splitRegex

Type: `regex`  
Default: `/\S+/g`

Regex used to split text in words.


## License

MIT © [Danilo Sampaio](http://github.org/danilosampaio)
