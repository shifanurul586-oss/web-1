
const typing = document.getElementById("typing");

const words = [
  "Pelajar.",
  "Web Developer.",
  "Kreator Digital."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const word = words[wordIndex];

  typing.textContent = deleting
    ? word.substring(0, charIndex - 1)
    : word.substring(0, charIndex + 1);

  charIndex += deleting ? -1 : 1;

  let delay = deleting ? 55 : 100;

  if (!deleting && charIndex === word.length) {
    deleting = true;
    delay = 1200;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 350;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();

// Menu navigasi untuk HP
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Ganti tema gelap dan terang
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Aktifkan tema gelap" : "Aktifkan tema terang"
  );
});

// Tahun otomatis di bagian footer
document.getElementById("year").textContent =
  new Date().getFullYear();

// Animasi ketika bagian website terlihat
const sections = document.querySelectorAll(
  ".about-card, .skill-card, .project-card, .contact-card"
);

sections.forEach(section => section.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach(section => observer.observe(section));
} else {
  sections.forEach(section => section.classList.add("visible"));
}
