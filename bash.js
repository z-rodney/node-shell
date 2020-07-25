const fs = require('fs');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

/* const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}; */

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.startsWith('cat')) {
    let files = cmd.split(' ');
    files.shift();
    files.length === 1 ? cat(files[0]) : files.forEach(elem => cat(elem));
  } else if (cmd.startsWith('curl')) {
    const url = cmd.slice(5);
    curl(url);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});

/* module.exports = function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
} */
