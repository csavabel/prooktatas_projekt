<<<<<<< HEAD
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
=======
// Initialize current image index
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-grid .thumbnail');
const mainImage = document.getElementById('main-image'); // Main image container
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalImage = document.createElement('img');
modal.appendChild(modalImage);

// Function to update the main image
function updateMainImage(index) {
    mainImage.src = images[index].src;
    currentImageIndex = index;
}

// Function to show image in modal
function showImage(src) {
    modal.style.display = 'block';
    modalImage.src = src;
    modalImage.alt = "Kép a galériából";
}

// Close the modal when clicking outside of the image
modal.addEventListener('click', function (event) {
    if (event.target !== modalImage) {
        modal.style.display = 'none';
    }
});

// Previous and next buttons for main image
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateMainImage(currentImageIndex);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateMainImage(currentImageIndex);
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Initialize first image as main image
images.forEach((img, index) => {
    if (index === 0) {
        mainImage.src = img.src;
    }
    img.addEventListener('click', () => {
        showImage(img.src);
    });
});
>>>>>>> 35aab7c (Initial commit)
