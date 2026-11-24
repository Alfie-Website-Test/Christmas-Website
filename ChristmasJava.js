
const images = [
    "AHbook.png",
    "KodakFilm.png",
    "Pyjamas.png",
    "RecordCleaningKit.png",
    "Job-offer.png",
    "Negative-Sleeves.png",
    "Binder.png",
    "MarvelSkyline.png",
    "world_peace.png",
    "Sublimation.png"
];

let currentImage = 0;
let timer;

const slide = document.getElementById("slide");

function showImage() {
    slide.classList.add("fade-out");

    setTimeout(() => {
        slide.src = images[currentImage];

        slide.onload = () => {
            slide.classList.remove("fade-out");
        };

        // Handle images that are already cached
        if (slide.complete) {
            slide.classList.remove("fade-out");
        }
    }, 500);
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage();
    resetTimer();
}

function previousImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage();
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextImage, 3000);
}

document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", previousImage);

timer = setInterval(nextImage, 3000);
