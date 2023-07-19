// Add an event listener to the menu toggle button for opening and closing the menu
document.querySelector('.menu-toggle-button').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('open');
  });
  
  // Add an event listener to the theme toggle button for switching between light and dark themes
  document.querySelector('.theme-toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
  });
  
  // Smooth scroll to section when clicking on a navigation link
  document.querySelectorAll('.list-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Show or hide the scroll-to-top button based on the scroll position
  window.addEventListener('scroll', function() {
    const scrollToTopButton = document.querySelector('.scroll-top');
    if (window.scrollY > 500) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });
  
  // Add form submission handling
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can add your form submission logic here
    // For example, send the form data to a server using AJAX
  });
  