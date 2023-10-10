// const heroSection = document.querySelector('.hero');

// window.addEventListener('scroll', function() {
//     const scrollY = window.scrollY;

//     heroSection.style.opacity = 1 - scrollY / 200;
// });

document.addEventListener('DOMContentLoaded', function () {
    // Get the hamburger button and the navbar menu
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('#navbarBasicExample');
  
    // Add an event listener to toggle the 'is-active' class
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  });
  