const like = document.querySelector('.likes-count');
like.addEventListener('click', () => {
  if (like.classList.contains('likes-count--active')) {
    like.textContent--;
  } else {
    like.textContent++;
  }
  like.classList.toggle('likes-count--active');
});
