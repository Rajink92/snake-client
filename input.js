const { UPKEY, LEFTKEY, DOWNKEY, RIGHTKEY } = require('./constants.js');

const msg = "Say: ";
const hello = "Bonjour! ca va?";

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  return stdin;
});

const handleUserInput = function (key)  {
  const stdout = process.stdout;
  const interval = function(key) {
    func = setInterval(() => {
      connection.write(key);
    }, 100);
    };
    if (key === '\u0003') {
      stdout.write("Exit Snake game!.\n");
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
  };
};

module.exports = { setupInput }