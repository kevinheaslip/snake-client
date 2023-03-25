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
      // \u0003 maps to ctrl+c input to quit the program
      if (key === '\u0003') {
        process.exit();
      }
    });
  
    stdin.on("data", (key) => {
      if (key === 'w') {
        connection.write("Move: up");
      }
    });
  
    stdin.on("data", (key) => {
      if (key === 'a') {
        connection.write("Move: left");
      }
    });
  
    stdin.on("data", (key) => {
      if (key === 's') {
        connection.write("Move: down");
      }
    });
  
    stdin.on("data", (key) => {
      if (key === 'd') {
        connection.write("Move: right");
      }
    });

    stdin.on("data", (key) => {
      if (key === '1') {
        connection.write("Say: How dare you!?");
      }
    });

    stdin.on("data", (key) => {
      if (key === '2') {
        connection.write("Say: The day is mine!");
      }
    });
  
    stdin.on("data", (key) => {
      if (key === '3') {
        connection.write("Say: Good luck!");
      }
    });
  };
  
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
