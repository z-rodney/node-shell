const fs = require('fs');

module.exports = function(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    process.stdout.write('prompt > ');
  }
);}
