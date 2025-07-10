import fs from "fs";
import os from "os";
import path from 'path'
import url from 'url'


fs.readFile("./Backend/fs.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.appendFile("./Backend/fs.txt", "hello from fs", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("append done ");
  }
});

console.log("OS platform:", os.platform());
console.log("Total memory:", os.totalmem());
console.log("Free memory:", os.freemem());

const pathOfFile =path.dirname(url.fileURLToPath(import.meta.url))
const filePath = path.join(pathOfFile, 'file.txt');
console.log('Absolute path:', filePath)