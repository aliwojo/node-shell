const request = require("request");

const curlFunc = function () {
  process.stdout.write("\nEnter url >");
  process.stdin.on("data", (data) => {
    const url = data.toString().trim();
    // console.log(url);
    request(url, function (error, response, body) {
      console.error("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
      process.stdout.write("\nprompt > ");
    });
  });
};

module.exports = curlFunc;
