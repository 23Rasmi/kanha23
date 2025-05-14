// Typing Effect
const typingTexts = [
  { text: "Aspiring Pharmacist", color: "red" },
  { text: "B.Pharm Final Year Student", color: "blue" },
  { text: "Passionate About Pharma", color: "green" }
];

let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  const current = typingTexts[index];
  typingElement.style.color = current.color;

  if (charIndex < current.text.length) {
    typingElement.textContent += current.text.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = typingElement.textContent.slice(0, -1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % typingTexts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
// Scroll Fade-In Animation
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);