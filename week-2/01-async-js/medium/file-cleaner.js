const fs = require("fs");

function read(file) {
    fs.readFile(file, "utf-8", (err, data) => {
        if(!err) {
            let s = data.split(" ").filter(word => word !== "").join(" ");
            console.log(s);
        }
    });
}

read("a.text");