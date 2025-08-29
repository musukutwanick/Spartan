// Highlight active nav link
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.nav-link');
  const path = window.location.pathname.split('/').pop();
  links.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('nav-active');
    } else {
      link.classList.remove('nav-active');
    }
  });
});
// JS for Spartan Traders landing page
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // Open mobile menu
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('translate-x-full');
  });
  
  // Close mobile menu
  closeMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('translate-x-full');
  });
  
  // Close menu when clicking on menu links
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('translate-x-full');
    });
  });
});
