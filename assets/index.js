document.querySelector('.carousel-button.next').addEventListener('click', function() {
  const current = document.querySelector('.carousel-item.active');
  let next = current.nextElementSibling;
  if (!next) {
    // Si on est au dernier élément, revient au début
    next = document.querySelector('.carousel-item:first-child');
  }
  current.classList.remove('active');
  next.classList.add('active');
});

document.querySelector('.carousel-button.prev').addEventListener('click', function() {
  const current = document.querySelector('.carousel-item.active');
  let prev = current.previousElementSibling;
  if (!prev) {
    // Si on est au premier élément, va au dernier
    prev = document.querySelector('.carousel-item:last-child');
  }
  current.classList.remove('active');
  prev.classList.add('active');
});
