const fs = require('fs');

const files = fs.readdirSync('..img/');
console.log(files);
module.exports = function (n) { return n * 111 };