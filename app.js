//stream
//streams are a fundamental concept for reading or writing in a continuous flow, making it efficient for handling large amount of data.

const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(3000);
