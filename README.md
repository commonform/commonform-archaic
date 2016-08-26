```javascript
var archaic = require('commonform-archaic')
var assert = require('assert')

assert.deepEqual(
  archaic({content: ['comes now the owner thereof']}),
  [
    {
      message: 'The phrase "comes now" is archaic.',
      level: 'info',
      path: ['content', 0],
      source: 'commonform-archaic',
      url: null
    },
    {
      message: 'The word "thereof" is archaic.',
      level: 'info',
      path: ['content', 0],
      source: 'commonform-archaic',
      url: null
    }
  ]
)
```
