var request = require('request');

function reddit(uri, clientId, clientSecret, accessToken) {

  clientId = this.clientId;
  clientSecret = this.clientSecret;
  accessToken = this.accessToken;

  data;

  //GET the data
  request.get({
    uri: uri,
    headers: {
      'clientId': clientId,
      'clientSecret': clientSecret,
      'accessToken': accessToken
    }
  }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }

    data = JSON.parse(body);
  });

  //API methods

}

module.exports = reddit();
