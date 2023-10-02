const path = require("path")

//display the seperator in the file path
 console.log(path.sep)

// display the path segment together using the specific delimiter as needed
const filepath = path.join("contenet", "subfolder", "test.txt")
console.log(filepath);


//return the last portion of the path
const base = path.basename(filepath)
console.log(base);

// resolve the absolute path from the given path segment
const absolutePath = path.resolve(__dirname, filepath)
console.log(absolutePath);
