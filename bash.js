const pwd = require("./pwd");

const ls = require("./ls");

const cat = require("./cat");

const curl = require("./curl");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd === "cat") {
    cat();
  } else if (cmd === "curl") {
    curl();
  }
});
