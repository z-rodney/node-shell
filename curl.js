module.exports = function(url) {
  const request = require('request');
  request(url, function (error, response, body) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
    process.stdout.write('\nprompt > ');
  });

};
