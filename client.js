
const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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

module.exports = { connect };
