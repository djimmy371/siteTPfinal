document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;

    function navigate(direction) {
        items[currentIndex].classList.remove('active');
        currentIndex += direction;
        if (currentIndex < 0) { currentIndex = items.length - 1; }
        if (currentIndex >= items.length) { currentIndex = 0; }
        items[currentIndex].classList.add('active');
    }

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        navigate(1);
    });

    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        navigate(-1);
    });
});
