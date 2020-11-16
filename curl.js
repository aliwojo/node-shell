const request = require("request");

const curlFunc = function (cmd, done) {
  //get url from entered command
  const url = cmd.split(" ")[1];
  request(url, function (error, response, body) {
    if (error) {
      done("Something went wrong!");
    } else {
      done(body);
    }
  });
};

module.exports = curlFunc;
