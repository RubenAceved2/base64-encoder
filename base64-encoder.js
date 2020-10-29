const fs = require("fs");

const encoder = (decoded) => {
  return Buffer.from(decoded, "base64");
};

const decoder = (encoded) => {
  return Buffer.from(encoded).toString("base64");
};

const decodeFile = (address, encodedFile, fileName) => {
  const decodedFile = Buffer.from(encodedFile, "base64");
  fs.writeFileSync(`${address}/${fileName}`, decodedFile, (err) => {
    if (err) return err;
  });
};

const encodeFile = (address, fileName) => {
  const file = fs.readFileSync(`${address}/${fileName}`);
  const encodedFile = Buffer.from(file).toString("base64");
  return encodedFile;
};

module.exports = {
  decoder,
  encoder,
  decodeFile,
  encodeFile
};
