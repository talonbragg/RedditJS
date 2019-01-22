const request = require('request');

function Reddit(options) {

  var clientId = options.clientId;
  var clientSecret = options.clientSecret;
  var userAgent = options.userAgent

  //Login
  this.login = function (username, password) {
    // request.post("https://www.reddit.com/api/v1/access_token", {
    //     form: {
    //       grant_type: "authorization_code",
    //       redirect: true,
    //       username: username,
    //       password: password,
    //       userAgent: userAgent
    //     },
    //     user: {
    //       username: clientId,
    //       password: clientSecret
    //     }
    // }, (err, res, body) => {
    //   if(err) {
    //     return console.log(err);
    //   }
    //
    //   this.accessToken = res.access_token;
    //   return console.log(`${res.statusCode} ${res.statusMessage} ${res}`);
    //
    // });
    var headers = {
      'User-Agent': 'Custom user agent'
    };

    var dataString = `grant_type=password&username=${username}&password=${password}`;

    var ops = {
      url: 'https://www.reddit.com/api/v1/access_token',
      method: 'POST',
      headers: headers,
      body: dataString,
      auth: {
          'user': clientId,
          'pass': clientSecret
      }
    };

    function callback(error, response, body) {
        var realBody = JSON.parse(body);
        if (!error && response.statusCode == 200) {
            console.log(realBody.access_token);
        }
    }

    request(ops, callback);
      }

}

  //API methods

var red = new Reddit({clientId: "clientId", clientSecret: "clientSecret", userAgent: "Custom user agent"});
red.login("username", "password");
//module.exports = reddit();
