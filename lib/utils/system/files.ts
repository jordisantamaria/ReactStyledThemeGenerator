const fs = require("fs");

//ejemplo: readFile('./resources/number.txt', (text) => console.log(text))
export const readFile = (file, callback) => {
  fs.readFile(file, "utf8", (err, text) => {
    if (err) throw err;
    const textArray = text.split("\n");
    callback(textArray);
  });
};

export const readFileWithPromise = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, list) => {
      if (err) reject(err);

      resolve(list.split("\n"));
    });
  });
};

export const writeFile = (file, data) => {
  fs.writeFile(file, data, err => {
    if (err) throw err;
  });
};
