## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

## Solution

const fs = require("fs");

fs.writeFile("a.text", "\n This is the added text", "utf-8", (err) => {});

fs.readFile("a.text", "utf-8", (err, data) => {
console.log(data);
});

fs.appendFile("a.text", "\n This is the appended line", "utf-8", (err) => {});

fs.readFile("a.text", "utf-8", (err, data) => {
console.log(data);
});
