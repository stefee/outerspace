# outerspace

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
