document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form Submission Alert
    document.getElementById('subscribeBtn').addEventListener('click', function () {
      const email = document.getElementById('email').value;
      if (email) {
        alert('Thank you for subscribing with ' + email);
      } else {
        alert('Please enter a valid email address');
      }
    });
  
    // Carousel Functionality
    const carousel = document.querySelector('.carousel');
    const carouselBoxes = carousel.querySelectorAll('.box');
    let currentIndex = 0;
  
    function showSlide(index) {
      carouselBoxes.forEach((box, i) => {
        box.style.display = i === index ? 'block' : 'none';
      });
    }
  
    document.querySelector('.carousel-control.prev').addEventListener('click', function () {
      currentIndex = (currentIndex === 0) ? carouselBoxes.length - 1 : currentIndex - 1;
      showSlide(currentIndex);
    });
  
    document.querySelector('.carousel-control.next').addEventListener('click', function () {
      currentIndex = (currentIndex === carouselBoxes.length - 1) ? 0 : currentIndex + 1;
      showSlide(currentIndex);
    });
  
    showSlide(currentIndex);
  
    // Mobile Menu Toggle
    document.querySelector('.mobile-menu-toggle').addEventListener('click', function () {
      document.querySelector('.menu-item').classList.toggle('open');
    });
  });
  