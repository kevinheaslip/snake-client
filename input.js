// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function() {
    stdin.on("data", (key) => {
      // \u0003 maps to ctrl+c input
      if (key === '\u0003') {
        process.exit();
      }
    });
  
    stdin.on("data", (key) => {
      if (key === 'w') {
        // console.log("Move: up");
        connection.write("Move: up");
      }
    });
  
    stdin.on("data", (key) => {
      if (key === 'a') {
        // console.log("Move: left");
        connection.write("Move: left");
      }
    });
  
    stdin.on("data", (key) => {
      if (key === 's') {
        // console.log("Move: down");
        connection.write("Move: down");
      }
    });
  
    stdin.on("data", (key) => {
      if (key === 'd') {
        // console.log("Move: right");
        connection.write("Move: right");
      }
    });
  
  };
  
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = { setupInput };
