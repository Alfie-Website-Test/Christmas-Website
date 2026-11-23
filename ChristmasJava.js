

const images = [
    "AHBook.png",
    "KodakFilm.png",
    "Pyjamas.png"
    "RecordCleaningKit.png",
    "Job-Offer.png",
    "Negative-Sleeves.png",
    "Binder.png"
    "MarvelSkyline.png"
    "world_peace.png"
];

let currentImage = 0;

function changeImage() {
    const slide = document.getElementById("slide");

    slide.style.opacity = 0;

    setTimeout(() => {
        currentImage = (currentImage + 1) % images.length;
        slide.src = images[currentImage];
        slide.style.opacity = 1;
    }, 500);
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
