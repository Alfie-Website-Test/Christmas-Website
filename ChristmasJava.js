const images = [
    "AHBook.png",
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

const slide = document.getElementById("slide");

// Display the current image
function showImage() {
    slide.style.opacity = 0;

    setTimeout(() => {
        slide.src = images[currentImage];
        slide.style.opacity = 1;
    }, 500);
}

// Next image
function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage();
}

// Previous image
function previousImage() {
    currentImage =
        (currentImage - 1 + images.length) % images.length;

    showImage();
}

// Connect buttons
document.getElementById("next").addEventListener("click", nextImage);

document.getElementById("prev").addEventListener("click", previousImage);

// Automatic slideshow every 3 seconds
setInterval(nextImage, 3000);
