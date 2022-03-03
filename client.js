const net = require('net');
const conn = require('./play');

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.50.2',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connected to server!")
    conn.write("Name: RAJ")
  });


  conn.on("disconnect", () => {
    console.log('you ded cuz you idled')
  });
  return conn;
};

module.exports = conn;
