const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "192.168.1.120",
    port: 50541
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log(`Server says: ${data}`);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: KDH");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });

  return conn;
};

module.exports = { connect };
