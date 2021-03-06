const { UPKEY, LEFTKEY, DOWNKEY, RIGHTKEY } = require('./constants.js');

let connection; 

const msg = "Say: ";
const greeting = "Bonjour! ca va?";
const simrun = "Keep it up!"


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key);
  });
  return stdin;
};

let func;

const handleUserInput = (key) => {
  const stdout = process.stdout;
  const interval = function(key) {
    func = setInterval(() => {
      connection.write(key);
    }, 200);
    };
    if (key === '\u0003') {
      stdout.write("Exit Snake game! Au Revoir!\n");
      process.exit();
    }
    if (key === 'w') {
      clearInterval(func);
      interval(UPKEY);
    }
    if (key === 'a') {
      clearInterval(func);
      interval(LEFTKEY);
    }
    if (key === 's') {
      clearInterval(func);
      interval(DOWNKEY);
    }
    if (key === 'd') {
      clearInterval(func);
      interval(RIGHTKEY);
    }
    if (key === "h") {
      connection.write(msg + greeting);
    }
    if (key === "o") {
      connection.write(msg + simrun);
    }
};


module.exports = { setupInput }