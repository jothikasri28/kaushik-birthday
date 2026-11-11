
// GET HTML ELEMENTS

const surpriseBtn = document.getElementById("surpriseBtn");
const welcome = document.getElementById("welcome");
const birthdayContent = document.getElementById("birthdayContent");
const celebrateBtn = document.getElementById("celebrateBtn");


// OPEN THE GIFT

surpriseBtn.addEventListener("click", function () {

    // Hide welcome screen
    welcome.classList.add("hidden");

    // Reveal birthday content
    birthdayContent.classList.remove("hidden");

    // Start celebration
    createConfetti();
    createBalloons();

    // Scroll to birthday gallery
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// CONFETTI ANIMATION

function createConfetti() {

    const colors = [
        "#f3cf83",
        "#ffffff",
        "#e6a84c",
        "#d9c5ff",
        "#ffb6c1"
    ];

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = Math.random() * 100 + "vw";

        const duration = 3 + Math.random() * 4;

        confetti.style.animationDuration = duration + "s";

        document.body.appendChild(confetti);

        setTimeout(function () {
            confetti.remove();
        }, duration * 1000);

    }

}


// FLOATING BALLOONS

function createBalloons() {

    const balloonEmojis = ["🎈", "🎈", "🎈", "✨"];

    for (let i = 0; i < 18; i++) {

        const balloon = document.createElement("div");

        balloon.classList.add("balloon");

        balloon.innerHTML =
            balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];

        balloon.style.left = Math.random() * 100 + "vw";

        const duration = 5 + Math.random() * 5;

        balloon.style.animationDuration = duration + "s";

        balloon.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(balloon);

        setTimeout(function () {
            balloon.remove();
        }, (duration + 2) * 1000);

    }

}


// CELEBRATE AGAIN BUTTON

celebrateBtn.addEventListener("click", function () {

    createConfetti();
    createBalloons();

});


// WEBSITE LOADED

console.log("Kaushik Birthday Website is Ready! 🎂");
