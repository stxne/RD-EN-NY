const textContainer = document.querySelector('.text-container');
const rightColumn = document.querySelector('.essay-right');
const leftColumn = document.querySelector('.essay-left');

rightColumn.addEventListener('click', () => {
    textContainer.classList.toggle('rotated');
});

leftColumn.addEventListener('click', () => {
    textContainer.classList.toggle('rotated');
});

const clickableLetters = document.querySelectorAll('.clickable-letter');

clickableLetters.forEach(letter => {
    letter.addEventListener("click", () => {
      const page = letter.dataset.page;
      if (page) {
        window.location.href = page;
      }
    });
  });






