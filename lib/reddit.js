consts request = require('request');

function reddit(options) {

  this.clientId = options.clientId;
  this.clientSecret = options.clientSecret;


  //Login
  function login() {
    request.post(`http://reddit.com/api/vi/access_token`, {
      form: {
        grant_type: 'password',
        username: username,
        password: password
      },
      auth: {
        username: this.clientId,
        password: this.clientSecret
      }
    }, (err, res, body) => {
      if(err) {
        return console.log(err);
      }

      this.accessToken = res.jsonData.access_token; 

    });
  }

}

  //API methods

}

module.exports = reddit();
