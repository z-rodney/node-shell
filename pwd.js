
/* const pwd = process.stdin.on('data', data => {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}); */

module.exports = function() {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
};
