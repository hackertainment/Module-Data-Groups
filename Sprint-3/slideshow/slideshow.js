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
    document.getElementById("backward-btn").addEventListener("click", prevSlide);
    document.getElementById("forward-btn").addEventListener("click", nextSlide);
});

function prevSlide() {
    const image = document.getElementById("carousel-img").getAttribute("src");
    const index = (images.indexOf(image)+images.length-1)%images.length;
    
    console.log(image, index);
    document.getElementById("carousel-img").src = images[index];
}

function nextSlide() {
    const image = document.getElementById("carousel-img").getAttribute("src");
    const index = (images.indexOf(image)+1)%images.length;

    console.log(image, index);
    document.getElementById("carousel-img").src = images[index];
}