const images = [
    "AHbook.png",
    "KodakFilm.png",
    "Pyjamas.png",
    "RecordCleaningKit.png",
    "Job-Offer.png",
    "Negative-Sleeves.png",
    "Binder.png",
    "MarvelSkyline.png",
    "world_peace.png"
];

let currentImage = 0;
let timer;

const slide = document.getElementById("slide");

function showImage() {
    slide.src = images[currentImage];
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage();
}

function previousImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage();
}

document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", previousImage);

timer = setInterval(nextImage, 3000);
