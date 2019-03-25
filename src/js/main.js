/* Full background with squares */

const background = document.getElementById('background');
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let numberOfSquaresPerLine = windowWidth /75;
let numberOfLines = windowHeight / 75;

//width of square in CSS
const width = 60;
let x = 15;
let y = 15;
const fragment = document.createDocumentFragment();


function createSquare(x, y) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.style.left = x + 'px';
  square.style.top = y + 'px';
  window.addEventListener('resize', () => {
    square.remove();
  })
  fragment.appendChild(square);
}

function squares() {
  if (window.innerWidth > 899) {
    for (let j = 1; j <= numberOfLines; j++) {
      for (let i = 1; i <= numberOfSquaresPerLine; i++) {
        createSquare(x, y);
        x += 20 + width;
      }
      x = 15;
      y += 20 + width;
    }
    background.appendChild(fragment);
  }
}

squares();

window.addEventListener('resize', () => {
  x = 15;
  y = 15;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  numberOfSquaresPerLine = windowWidth /75;
  numberOfLines = windowHeight / 75;
  setTimeout(() => {
    squares();
  }, 100)
})






/* Parallax on mousemove */

// to work, elements need to have a data-depth and have a movable position (be in absolute position)


class Parallax {
  constructor(intensity, smoothing, zone) {
    this.intensity = intensity;
    this.zone = zone;
    this.smoothing = smoothing;
    this.elements = zone.querySelectorAll("[data-depth]");
    this.mouse = { x: 0, y: 0 };
    this.mouseDelta = { x: 0, y: 0 };
    this.currentDelta = { x: 0, y: 0 };

    zone.addEventListener("mousemove", event => {
      this.mouse = { x: event.clientX, y: event.clientY };
      let origin = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      this.mouseDelta = {
        x: event.clientX - origin.x,
        y: event.clientY - origin.y
      };
    });
  }

  getMovement() {
    return {
      x: -this.currentDelta.x * this.intensity,
      y: -this.currentDelta.y * this.intensity
    };
  }

  update() {
    if (window.innerWidth < 899) {
      this.elements.forEach(element => {

        TweenMax.set(element, {
          x: 0 + "px",
          y: 0 + "px",
          force3D: true
        });
      });
    } else {
      this.currentDelta.x += (this.mouseDelta.x - this.currentDelta.x) * this.smoothing;
      this.currentDelta.y += (this.mouseDelta.y - this.currentDelta.y) * this.smoothing;
      let movement = this.getMovement();
      this.elements.forEach(element => {
        let depth = element.getAttribute("data-depth");
        let target = { x: movement.x * depth, y: movement.y * depth };

        TweenMax.set(element, {
          x: target.x + "px",
          y: target.y + "px",
          force3D: true
        });
      });
    }
    
  }
}


//to optimize
//parallax visitcard
let visitCardParallax = new Parallax(0.3, 0.05, background);

function update() {
  visitCardParallax.update();
  requestAnimationFrame(update);
}
update();

window.addEventListener('resize', () => {
  update();
})

//parallax projects
const works = document.getElementById('works');

let worksParallax = new Parallax(0.3, 0.05, works);

function update2() {
  worksParallax.update();
  requestAnimationFrame(update2);
}

update2();







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
const links = document.querySelectorAll('.navLink');

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

  if (window.innerWidth < 900) {
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