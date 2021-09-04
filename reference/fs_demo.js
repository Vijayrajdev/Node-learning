const path = require("path");
const fs = require("fs");

// Create folder
fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Folder created...");
});

// Create and write file
fs.writeFile(
  path.join(__dirname, "/test", "Hello.txt"),
  "Hello vijay",
  (err) => {
    if (err) throw err;
    console.log("File written...");

    // Append file
    fs.appendFile(
      path.join(__dirname, "/test", "Hello.txt"),
      " I love Node.js",
      (err) => {
        if (err) throw err;
        console.log("File written...");
      }
    );
  }
);

// Read file
fs.readFile(
  path.join(__dirname, "/test", "Hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// Rename File
fs.rename(
  path.join(__dirname, "/test", "Hello.txt"),
  path.join(__dirname, "/test", "Helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
