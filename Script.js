// Smooth fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "opacity 1.5s ease-in";
      el.style.opacity = 1;
    }, 200);
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});