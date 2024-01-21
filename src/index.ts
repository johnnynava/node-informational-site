import fs from "fs";
import http from "http";

const port: number = 8100;

const server = http.createServer((req, res) => {
  let filename: string = "." + req.url;
  if (filename === "./") {
    filename = "./index.html";
  } else if (
    filename === "./index" ||
    filename === "./about" ||
    filename === "./contact-me"
  ) {
    filename = filename + ".html";
  }
  fs.readFile(filename, (err, data) => {
    if (err) {
      fs.readFile("./404.html", (err, data) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
