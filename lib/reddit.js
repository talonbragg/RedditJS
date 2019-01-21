consts request = require('request');

function reddit() {

  var clientId = this.clientId;
  var clientSecret = this.clientSecret;
  var accessToken = this.accessToken;

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
