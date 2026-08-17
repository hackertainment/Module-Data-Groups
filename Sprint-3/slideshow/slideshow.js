const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    "https://plus.unsplash.com/premium_vector-1719015253440-ccedd0c117c3",
    "https://images.unsplash.com/vector-1741847236185-27b1ff478511",
    "https://images.unsplash.com/vector-1740286698436-d4049d34f57c"
];


// Write your code here
window.addEventListener("load", () => {
    document.getElementById("backward-btn").addEventListener("click", function handler(event) {stopAuto(); prevSlide();});
    document.getElementById("forward-btn").addEventListener("click", function handler(event) {stopAuto(); nextSlide();});

    document.getElementById("stop-auto-btn").addEventListener("click", stopAuto);
    document.getElementById("backward-auto-btn").addEventListener("click", prevAuto);
    document.getElementById("forward-auto-btn").addEventListener("click", nextAuto);
});

function prevSlide() {
    const image = document.getElementById("carousel-img").getAttribute("src");
    const index = (images.indexOf(image)+images.length-1)%images.length;
    
    document.getElementById("carousel-img").src = images[index];
}

function nextSlide() {
    const image = document.getElementById("carousel-img").getAttribute("src");
    const index = (images.indexOf(image)+1)%images.length;

    document.getElementById("carousel-img").src = images[index];
}

let timer = null;

function stopAuto() {
    if (timer!=null) {
        clearInterval(timer);
        timer = null;
    }
}

function prevAuto() {
    stopAuto();
    prevSlide();
    timer = setInterval(() => {
        prevSlide();
    }, 5000);
}

function nextAuto() {
    stopAuto();
    nextSlide();
    timer = setInterval(() => {
        nextSlide();
    }, 5000);
}