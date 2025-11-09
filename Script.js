// Smooth fade-in on page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "opacity 1.5s ease-in";
      el.style.opacity = 1;
    }, 200);
  });
});

// Hamburger menu toggle
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}

// Optional: close menu automatically when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});