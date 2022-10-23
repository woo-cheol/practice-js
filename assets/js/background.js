const images = ["bg_01.jpg", "bg_02.jpg", "bg_03.jpg"];

const imagesClass = "bg";

const randImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");


bgImage.src = `assets/img/${randImage}`;
bgImage.classList.add(imagesClass);

document.body.appendChild(bgImage);