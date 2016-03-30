fs = require('fs')

module.exports = fs

fs.writeDelay = 50
fs.readDelay = 50

fs._writeFile = fs.writeFile

fs.writeFile = function(filename, contents, f) {
  const delay = fs.writeDelay

  const writeF = function () {
    fs._writeFile(filename, contents, f)
  }

  setTimeout(writeF, delay || 0)
}

fs._readFile = fs.readFile

fs.readFile = function (filename, format, f) {
  const delay = fs.readDelay

  const writeF = function () {
    fs._readFile(filename, format, f)
  }

  setTimeout(writeF, delay  || 0)
}
