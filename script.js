// === Reveal elements on scroll ===
const fadeElements = document.querySelectorAll('.fade-in, .slide-up');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// === Typing effect for header ===
const headerText = document.querySelector("header h1");
const text = headerText.textContent;
headerText.textContent = "";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    headerText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120);
  }
}
window.addEventListener('load', typeEffect);

// === Floating particles background (extra wow effect) ===
const particleCount = 25;
const body = document.body;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  body.appendChild(particle);

  const size = Math.random() * 4 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${Math.random() * 8 + 4}s`;
  particle.style.animationDelay = `${Math.random() * 5}s`;
}

// === Particle style ===
const style = document.createElement('style');
style.textContent = `
  .particle {
    position: fixed;
    background: rgba(13,110,253,0.6);
    border-radius: 50%;
    bottom: 0;
    opacity: 0.7;
    animation: floatUp linear infinite;
  }
  @keyframes floatUp {
    from { transform: translateY(0); opacity: 0.8; }
    to { transform: translateY(-120vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
