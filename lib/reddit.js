consts request = require('request');

function reddit() {

  var accessKey = this.accessKey;
  var accessKeyId = this.accessKeyId;

  // data;
  //
  // //GET the data
  // request.get({
  //   uri: uri,
  //   headers: {
  //     clientId: clientId,
  //     clientSecret: clientSecret
  //   }
  // }, (err, res, body) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //
  //   data = JSON.parse(body);
  // });

  //Login
function login(username, password) {
  this.request('/api/v1/access_token', {
    method: 'POST',
    form: {
        grant_type: 'password',
        username: username,
        password: password
    },
    auth: {
        username: clientId,
        password: clientSecret
    }
  }
}

  //API methods

}

module.exports = reddit();
