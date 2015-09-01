module.exports = require('commonform-phrase-annotator')(
  require('american-legal-archaisms'),
  function(form, path, phrase) {
    return {
      level: 'info',
      message: (
        'The ' +
        ( phrase.indexOf(' ') > -1 ? 'phrase' : 'word' ) +
        ' "' + phrase + '"' +
        ' is archaic.' ),
      source: 'commonform-archaic',
      url: null,
      path: path } })
