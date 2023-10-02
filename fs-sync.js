//In Node.js, the fs (file system) module is a built-in module that provides functionality for interacting with the file system. It allows you to perform operations like reading from and writing to files, creating and deleting files and directories, and more.

const fs = require("fs");

try {
  const data = fs.readFileSync("path-modules.js", "utf8");
  console.log(data);
} catch (err) {
  console.log(err);
}

//Writes data to a file synchronously. It takes a file path, data to write, options (optional), and writes the data to the file.

try {
  fs.writeFileSync("file.txt", "Hello, world!", "utf8");
  console.log("File written successfully.");
} catch (err) {
  console.error(err);
}
