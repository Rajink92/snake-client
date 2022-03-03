const conn = require('./client');
const connect = conn

console.log("Connecting ...");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

 const handleUserInput = function ()  {
   
 }
module.exports = conn;