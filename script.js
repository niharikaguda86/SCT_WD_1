// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Button Click Event
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    alert("Welcome! Let's build your website 🚀");
});

// Smooth Scroll Effect
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
