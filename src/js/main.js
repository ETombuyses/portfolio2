/* Flip the car on click */
var flipCard = document.getElementById('flipCard');

flipCard.addEventListener('click', function() {
  flipCard.classList.toggle('is-flipped');
})


/* Show content once the card has been flipped */

//to fix : animation doesn't always work on mobile version (
//if the card is flipped on desktop, then we resize to mobile, 
//then we close the card, we reopen it, then we resize to desktop, 
//then we flip the card on desktop, then we resize to mobile:  the card stays closed)
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
 

  window.addEventListener('resize' ,function() {
    if (window.innerWidth > 1099 && window.innerHeight > 699) {
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