import express from "express";
import path from "path";
const app = express();
const port: number = 8100;

app.get("/", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve("dist/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.resolve("dist/contact-me.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.resolve("dist/404.html"));
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
