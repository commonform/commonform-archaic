```javascript
var archaic = require('commonform-archaic')
var assert = require('assert')

assert.deepEqual(
  archaic({ content: [ 'all rights thereof and whereof' ] }),
  [ { message: '"thereof" is archaic',
      path: [ 'content', 0 ],
      source: 'commonform-archaic',
      url: null },
    { message: '"whereof" is archaic',
      path: [ 'content', 0 ],
      source: 'commonform-archaic',
      url: null } ])
```
