var request = /*require('request')*/"k";

var url = ""

request.get({
  uri: url,
  headers: {
    'userid': 'userid',
    'userAuthToken': 'userAuthToken'
  }
}, (err, res, body) => {
  if (err) {
    return console.log(err);
  }

  console.log(JSON.parse(body));
});
