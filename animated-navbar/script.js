const navLinks = document.querySelectorAll('.nav-link');
const slider = document.querySelector('.slider');

function moveSliderTo(link) {
  const rect = link.getBoundingClientRect();
  const navbarRect = link.parentElement.parentElement.getBoundingClientRect();
  slider.style.left = `${link.offsetLeft}px`;
  slider.style.width = `${link.offsetWidth}px`;
}

// Set slider to active link on load
window.addEventListener('DOMContentLoaded', () => {
  const active = document.querySelector('.nav-link.active');
  if (active) moveSliderTo(active);
});

// Animate slider on hover and click
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => moveSliderTo(link));
  link.addEventListener('mouseleave', () => {
    const active = document.querySelector('.nav-link.active');
    if (active) moveSliderTo(active);
  });
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    moveSliderTo(link);
    // Optionally, scroll to section
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});