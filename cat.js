const fs = require("fs");

const catFunc = function () {
  fs.readFile(__filename, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    }
  });
}

module.exports = catFunc;


