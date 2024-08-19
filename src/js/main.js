import '../scss/styles.scss'

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/tooltip';

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.nav-link');
  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      const target = document.querySelector(this.getAttribute('data-bs-target'));
      
      this.classList.toggle('active');
      this.setAttribute('aria-selected', this.classList.contains('active'));
      
      target.classList.toggle('show');
      target.classList.toggle('active');
    });
  });

  const carouselInner = document.getElementById('carouselInner');
  document.querySelectorAll('[data-bs-toggle="modal"]').forEach((element) => {
    element.addEventListener('click', (event) => {
      const images = document.querySelectorAll(`#${event.target.closest('.carousel').id} .carousel-item img`);
      
      carouselInner.innerHTML = '';

      images.forEach((img, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `<img src="${img.src}" class="d-block w-100" alt="Image ${index + 1}">`;
        carouselInner.appendChild(carouselItem);
      });
    });
  });

  function handleScroll() {
    const header = document.getElementById('header-all');
    if (window.scrollY > 50) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
});