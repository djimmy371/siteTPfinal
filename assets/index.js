document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector('.bulle7-container');
  const slides = Array.from(slideContainer.children);
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  const groupSize = 2;
  const maxIndex = Math.ceil(slides.length / groupSize) - 1;

  function showSlides(index) {
    let startIndex = index * groupSize;
    let endIndex = startIndex + groupSize;

    if (endIndex > slides.length) {
      startIndex = slides.length - groupSize;
      endIndex = slides.length;
    }

    slides.forEach((slide, i) => {
      slide.style.display = (i >= startIndex && i < endIndex) ? 'block' : 'none';
    });
  }
  showSlides(currentIndex);
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? maxIndex : currentIndex - 1;
    showSlides(currentIndex);
  });

  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex === maxIndex) ? 0 : currentIndex + 1;
    showSlides(currentIndex);
  });
  });