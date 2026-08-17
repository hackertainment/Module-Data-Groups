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

let count = null;
let timer = null;

function stopTimer() {
    if (timer!=null) {
        clearInterval(timer);
        timer = null;
        document.getElementById("time-remaining").innerHTML = "--:--";
    }
}

function startTimer() {
    let [minstr, secstr] = "00:05".split(":");
    let second = Number(minstr)*60+Number(secstr);

    stopTimer();
    document.getElementById("time-remaining").innerHTML = minstr+":"+secstr;
    timer = setInterval(() => {
        if (second>0) {
            second--;
            minstr = Math.floor(second/60).toString().padStart(2, "0");
            secstr = (second%60).toString().padStart(2, "0");
            document.getElementById("time-remaining").innerHTML = minstr+":"+secstr;
        }
    }, 1000);
}

function stopAuto() {
    stopTimer();
    if (count!=null) {
        clearInterval(count);
        count = null;
    }
}

function prevAuto() {
    stopAuto();
    startTimer();
    prevSlide();
    count = setInterval(() => {
        startTimer();
        prevSlide();
    }, 5000);
}

function nextAuto() {
    stopAuto();
    startTimer();
    nextSlide();
    count = setInterval(() => {
        startTimer();
        nextSlide();
    }, 5000);
}