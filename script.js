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



const poemLines = document.querySelector('.poem-lines');
const animationDuration = 30; // Must match CSS animation duration
const scrollFactor = 0.5; // Adjust sensitivity of scroll to animation speed

window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const animationPlayTime = scrollPercentage * animationDuration;
    poemLines.style.animationPlayState = 'running';
    poemLines.style.animationDelay = `-${animationPlayTime}s`;
});





