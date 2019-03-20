/* Full background with squares */

const background = document.getElementById('background');
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const numberOfSquaresPerLine = windowWidth /65;
const numberOfLines = windowHeight / 65;

//width of square in CSS
const width = 60;
let x = 15;
let y = 15;

function createSquare(x, y) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.style.left = x + 'px';
  square.style.top = y + 'px';
  window.addEventListener('resize', () => {
    square.remove();
  })
  background.appendChild(square);
}

function squares() {
  if (window.innerWidth > 1099 && window.innerHeight > 600) {
    for (let j = 1; j <= numberOfLines; j++) {
      for (let i = 1; i <= numberOfSquaresPerLine; i++) {
        createSquare(x, y);
        x += 20 + width;
      }
      x = 15;
      y += 20 + width;
    }
  }
}

squares();

window.addEventListener('resize', () => {
  x = 15;
  y = 15;
  setTimeout(() => {
    squares();
  }, 100)
})


/* burger menu */

const nav = document.getElementById('navigation');
const burgerIcon = document.getElementById('burgerIcon');
const pageLinks = document.getElementById('pageLinks');
const externalLinks = document.getElementById('externalLinks');

nav.addEventListener('click', (event) => {
  event.stopPropagation();
  if (nav.classList.contains('is-open')) {
    pageLinks.classList.remove('is-open');
    externalLinks.classList.remove('is-open');

    setTimeout(() => {
      nav.classList.remove('is-open');
      burgerIcon.classList.remove('is-open');

    }, 200);
  } else {
    nav.classList.add('is-open');
    burgerIcon.classList.add('is-open');

    setTimeout(() => {
      pageLinks.classList.add('is-open');
      externalLinks.classList.add('is-open');
    }, 400);
  }
});


document.addEventListener('click', () => {

  if (nav.classList.contains('is-open')) {
    pageLinks.classList.remove('is-open');
    externalLinks.classList.remove('is-open');
    setTimeout(() => {
      nav.classList.remove('is-open');
      burgerIcon.classList.remove('is-open');
    }, 200);
  }
})

//prevent clicking on nav when clicking on an external link
const links = document.querySelectorAll('#navLink');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.stopPropagation();
  })
})





/* Flip the card on click */

const flipCard = document.getElementById('flipCard');

flipCard.addEventListener('click', () => {
  flipCard.classList.toggle('is-flipped');
})




/* Show content once the card has been flipped */

const backCardTitle = document.getElementById('backCardTitle');
const backCard = document.getElementById('backCard');
const backCardText = document.getElementById('backCardText');
let backSide = false;

flipCard.addEventListener('click', () => {
  backSide = !backSide;

  if (window.innerWidth < 1200) {
    backCardTitle.classList.toggle('is-visible');
    backCard.classList.toggle('is-flipped');
    backCardText.classList.toggle('is-visible');
  }

  //if we resize the window when the card is flipped
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1099 && window.innerHeight > 600) {
      backCardTitle.classList.remove('is-visible');
      backCard.classList.remove('is-flipped');
      backCardText.classList.remove('is-visible');
    }
    else if (backSide) {
      backCardTitle.classList.add('is-visible');
      backCard.classList.add('is-flipped');
      backCardText.classList.add('is-visible');
    }
  })
});