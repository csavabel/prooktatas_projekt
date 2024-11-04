let currentImageIndex = 0;
const images = [
    'img/csirke.jpg',
    'img/haz.jpg',
    'img/hus.jpg',
    'img/kecske.jpg',
    'img/lovaglas.jpg',
    'img/paci.jpg',
    'img/ret.jpg',
    'img/rofi.jpg',
    'img/sajt.jpg',
    'img/szallas.jpg',
    'img/szamar.jpg',
    'img/szorp.jpg',
    'img/tanyahaz.jpg',
    'img/tura.jpg',
    'img/tyukok.jpg'
];

function showImage(src) {
    const currentImage = document.getElementById('current-image');
    currentImage.src = src;
}

document.getElementById('prev-button').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(images[currentImageIndex]);
});

document.getElementById('next-button').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(images[currentImageIndex]);
});

// Inicializálás
showImage(images[currentImageIndex]);
