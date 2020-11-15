const fs = require("fs");

const lsFunc = function (done) {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done("Something went wrong!");
    } else {
      done(files.join("\n"));
    }
  });
};

module.exports = lsFunc;
