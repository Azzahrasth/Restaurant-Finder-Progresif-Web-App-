const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const target = path.resolve(__dirname, "src/public/images/logo");
const destination = path.resolve(__dirname, "src/public/images/logo");

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split(".").slice(0, -1).join(".")}-large.png`
      )
    );

  // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.png
  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split(".").slice(0, -1).join(".")}-small.png`
      )
    );
});
