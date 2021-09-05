const http = require("http");
const path = require("path");
const fs = require("fs");

// Create server
const server = http.createServer((req, res) => {
  //   // Home page
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   // About page
  //   if (req.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   // API
  //   if (req.url === "/api/users") {
  //     const users = [
  //       { name: "vijay", age: 19 },
  //       { name: "raj", age: 50 },
  //     ];
  //     res.writeHead(200, { "Content-type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  // File path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension
  let extname = path.extname(filePath);

  // initial Content-type
  let contentType = "text/html";

  // check extname and set contentType
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/JSON";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      // Sucess
      res.writeHead(200, { "Content-type": contentType });
      res.end(content, "utf-8");
    }
  });
});

// Port
const PORT = process.env.PORT || 5000;

// Listen
server.listen(PORT, () => console.log(`Server is runnig on port ${PORT}`));
