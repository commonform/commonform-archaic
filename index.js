module.exports = require('commonform-phrase-annotator')(
  require('american-legal-archaisms'),
  function(form, path, phrase) {
    return {
      message: '"' + phrase + '" is archaic',
      source: 'commonform-archaic',
      url: null,
      path: path } })
