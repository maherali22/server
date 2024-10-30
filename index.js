const http = require("http");
const fs = require("fs");
// const a = require("data.txt");
const server = http.createServer((req, res) => {
  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
      res.setHeader("Content-Type", "text/plain");
      res.end("error");
      return;
    }
    res.setHeader("Content-Type", "text/plain");
    res.end(data);
  });
});

server.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
