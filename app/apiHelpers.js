const request = require('request');

const getBitCoinPrice = (callback) => {
  let apiUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-10-01&end=2018-10-16'

  const options = {
    url: apiUrl,
    headers: {
      'User-agent' :'request'
    }
  }

  request(options, (error, response, body) => {
    if (error) {
      console.log('api error', error);
    } else {
      console.log(response.body);
      callback(JSON.parse(response.body));
    }
  });
}
module.exports.getBitCoinPrice = getBitCoinPrice;