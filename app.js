document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle-button');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle-button');
  const body = document.body;
  let isDarkMode = false;

  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });

  // Smooth Scrolling
  const scrollLinks = document.querySelectorAll('.list-link');

  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Hide the menu after clicking on a link (for mobile view)
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  });
});
