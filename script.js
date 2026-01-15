// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "🌙" : "☀️";
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  const h = window.innerHeight;
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < h - 80) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Modal
function openModal(title, text) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerText = text;
  document.getElementById("featureModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("featureModal").style.display = "none";
}

// 🌸 Flower + Music toggle
let flowersOn = false;
const scene = document.getElementById("flowerScene");
const music = document.getElementById("bgMusic");

function toggleFlowers() {
  flowersOn = !flowersOn;

  if (flowersOn) {
    scene.style.display = "block";
    music.volume = 0.6;
    music.play();
  } else {
    scene.style.display = "none";
    music.pause();
    music.currentTime = 0;
  }
}
