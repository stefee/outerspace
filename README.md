# outerspace

[![npm version](https://img.shields.io/npm/v/outerspace.svg?style=flat-square)](https://npmjs.org/package/outerspace) [![build status](https://img.shields.io/travis/srilq/outerspace/latest.svg?style=flat-square)](https://travis-ci.org/srilq/outerspace)

[![downloads](https://img.shields.io/npm/dm/outerspace.svg?style=flat-square)](https://npmjs.org/package/outerspace) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> Explode whitespace surrounding template keys to outside of a template string.

Outerspace is a template function that moves leading/trailing whitespace in the
first/last template keys to the start/end of the string (respectively).

```js
const outerspace = require('outerspace')

outerspace`**${'\n Exclamation! \n\n'}**`
// '\n **Exclamation!** \n\n'

outerspace`**${'\n\n Holy'} ${'Exclamation '}${'Batman! \n'}**`
// '\n\n **Holy Exclamation Batman!** \n'
```
