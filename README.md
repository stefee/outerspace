# outerspace

[![npm version](https://img.shields.io/npm/v/outerspace.svg?style=flat-square)](https://npmjs.org/package/outerspace) [![build status](https://img.shields.io/travis/stefee/outerspace/latest.svg?style=flat-square)](https://travis-ci.com/stefee/outerspace)
[![downloads](https://img.shields.io/npm/dm/outerspace.svg?style=flat-square)](https://npmjs.org/package/outerspace) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> Preserve whitespace surrounding expressions in a template string.

Outerspace helps to preserve outer whitespace when prefixing and suffixing
a string by moving any leading/trailing whitespace in the original string to the
start/end of the return.

```js
const outerspace = require('outerspace')

outerspace`**${'\n Exclamation! \n\n'}**`
// '\n **Exclamation!** \n\n'

outerspace`**${'\n\n Holy'} ${'Exclamation '}${'Batman! \n'}**`
// '\n\n **Holy Exclamation Batman!** \n'

outerspace.wrap('Holy ', '\n\n Exclamation \n', ' Batman!')
// '\n\n Holy Exclamation Batman! \n'

outerspace.before('\n\n Exclamation Batman! \n', 'Holy ')
// '\n\n Holy Exclamation Batman! \n'

outerspace.after('\n\n Holy Exclamation \n', ' Batman!')
// '\n\n Holy Exclamation Batman! \n'
```

## API

### ``outerspace`[before]${[exprs]}...[after]` ``

Tagged template function: move any leading whitespace in the first expression
to the start of the return, and any trailing whitespace in the last expression
to the end of the return.

### `outerspace.wrap(before, string, after)`

Concatenate the given strings in order and move leading/trailing whitespace in
`string` to the start/end of the return.

### `outerspace.before(string, before)`

Concatenate the given strings in the order `before + string` and move leading
whitespace in `string` to the start of the return;

### `outerspace.after(string, after)`

Concatenate the given strings in the order `string + after` and move trailing
whitespace in `string` to the end of the return;
