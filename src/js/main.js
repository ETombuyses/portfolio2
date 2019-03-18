/* burger menu */

var nav = document.getElementById('navigation');
var burgerIcon = document.getElementById('burgerIcon');
var pageLinks = document.getElementById('pageLinks');
var externalLinks = document.getElementById('externalLinks');

nav.addEventListener('click', (event) => {
  event.stopPropagation();
  if (nav.classList.contains('is-open')) {     
     pageLinks.classList.remove('is-open');
     externalLinks.classList.remove('is-open');

     setTimeout(() =>{
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

     setTimeout(() =>{
      nav.classList.remove('is-open');
      burgerIcon.classList.remove('is-open');

     }, 200);
  }
})

//prevent clicking on nav when clicking on an external link

var links = document.querySelectorAll('#navLink');


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
  event.stopPropagation(); 
  });
}



/* Flip the card on click */
var flipCard = document.getElementById('flipCard');

flipCard.addEventListener('click', function() {
  flipCard.classList.toggle('is-flipped');
})


/* Show content once the card has been flipped */

var backCardTitle = document.getElementById('backCardTitle');
var backCard = document.getElementById('backCard');
var backCardText = document.getElementById('backCardText');
var backSide = false;

flipCard.addEventListener('click', function() {
  backSide = !backSide;

  if (window.innerWidth < 1200) {
    backCardTitle.classList.toggle('is-visible');
    backCard.classList.toggle('is-flipped');
    backCardText.classList.toggle('is-visible');
  }
 
  //if we resize the window when the card is flipped
  window.addEventListener('resize' ,function() {
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