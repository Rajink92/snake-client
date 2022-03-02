const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.50.2',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
const conn = connect();

conn.on("disconnect", () => {
  console.log('you ded cuz you idled')
});

console.log("Connecting ...");
connect();

