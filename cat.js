const fs = require("fs");

const catFunc = function (cmd, done) {
  const file = `./${cmd.split(" ")[1]}`;
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      done("Something went wrong!");
    } else {
      done(data);
    }
  });
};

module.exports = catFunc;
