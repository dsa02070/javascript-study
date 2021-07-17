const images = [
    "img01.png", "img02.png", "img03.png", "img04.png", "img05.png", "img06.jpg"
]

const img = images[Math.floor(Math.random() * images.length)];

const bgimages = document.createElement('img');
bgimages.src = `./img/${img}`

document.body.appendChild(bgimages)