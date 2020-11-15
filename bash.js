const pwd = require("./pwd");

const ls = require("./ls");

const cat = require("./cat");

const curl = require("./curl");

const done = function (output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd.slice(0, 3) === "cat") {
    cat(cmd, done);
  } else if (cmd.slice(0, 4) === "curl") {
    curl(cmd, done);
  }
});
