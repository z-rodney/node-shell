const fs = require('fs');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

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
  } else{
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
