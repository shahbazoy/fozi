// ==========================================
// script.js - PART 1
// ==========================================

// Hide Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
});

// ==========================================
// Typing Effect
// ==========================================

const typingText = document.getElementById("typing");

const message =
"Every moment with you feels special. This little website is just a reminder that you're an amazing person and I hope your birthday is filled with happiness, smiles and beautiful memories. ❤️";

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

typeWriter();

// ==========================================
// Countdown
// ==========================================

// ⚠️ CHANGE THIS DATE
// Example: September 26, 2026 at 12:00 AM
const birthday = new Date("September 26, 2026 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

}, 1000);

// ==========================================
// Background Music
// ==========================================

const music = document.getElementById("bgMusic");

const playMusic = document.getElementById("playMusic");

let musicPlaying = false;

playMusic.onclick = () => {

    if (!musicPlaying) {

        music.play();

        playMusic.innerHTML = "Pause Music ⏸";

        musicPlaying = true;

    } else {

        music.pause();

        playMusic.innerHTML = "Play Music 🎵";

        musicPlaying = false;

    }

};

// ==========================================
// Voice Note
// ==========================================

const voice = document.getElementById("voiceAudio");

document.getElementById("playVoice").onclick = () => {

    voice.currentTime = 0;

    voice.play();

};

// ==========================================
// Letter Popup
// ==========================================

const popup = document.getElementById("popup");

document.getElementById("openLetter").onclick = () => {

    popup.classList.add("active");

};

document.getElementById("closePopup").onclick = () => {

    popup.classList.remove("active");

};

window.onclick = (e) => {

    if (e.target == popup) {

        popup.classList.remove("active");

    }

};
// ==========================================
// script.js - PART 2 (FINAL)
// ==========================================

// ================================
// Gallery Lightbox
// ================================

const galleryImages = document.querySelectorAll(".card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

    });

});

closeLightbox.onclick = () => {

    lightbox.classList.remove("active");

};

lightbox.onclick = (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

};

// ================================
// Floating Hearts
// ================================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 350);

// ================================
// Fade Animation
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(sec => {

    sec.classList.add("fade");

    observer.observe(sec);

});

// ================================
// Confetti
// ================================

const confettiBtn = document.getElementById("confettiBtn");

confettiBtn.addEventListener("click", () => {

    confetti({

        particleCount: 250,

        spread: 180,

        origin: {

            y: 0.6

        }

    });

});

// ================================
// Surprise Button
// ================================

const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.onclick = () => {

    popup.classList.add("active");

    confetti({

        particleCount: 350,

        spread: 200,

        origin: {

            y: 0.5

        }

    });

};

// ================================
// Smooth Active Navbar
// ================================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const top = window.scrollY;

        const offset = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================================
// Birthday Message
// ================================

const today = new Date();

const month = today.getMonth() + 1;
const date = today.getDate();

// ⚠️ Change according to Fouziya's birthday
if (month === 9 && date === 26) {

    document.getElementById("days").innerHTML = "🎂";
    document.getElementById("hours").innerHTML = "🎉";
    document.getElementById("minutes").innerHTML = "❤️";
    document.getElementById("seconds").innerHTML = "🥳";

    setTimeout(() => {

        popup.classList.add("active");

        confetti({

            particleCount: 600,

            spread: 360,

            origin: {

                y: 0.55

            }

        });

    }, 1500);

}

// ================================
// Console Message
// ================================

console.log(`
❤️ Happy Birthday Fouziya ❤️

Made with Love by Shahbaz

Hope you smile every time you open this website.
`);