//flip the car on click
var flipCard = document.getElementById('flipCard');

flipCard.addEventListener('click', function() {
  flipCard.classList.toggle('is-flipped');
})


//show content once the card has been flipped

//to fix : animation doesn't always work on mobile version after resizing the window 
var backCardTitle = document.getElementById('backCardTitle');
var backCard = document.getElementById('backCard');
var backCardText = document.getElementById('backCardText');
flipCard.addEventListener('click', function() {

  if (window.innerWidth < 1200) {
    backCardTitle.classList.toggle('is-visible');
    backCard.classList.toggle('is-flipped');
    backCardText.classList.toggle('is-visible');

  }
 

  window.addEventListener('resize' ,function() {
    if (window.innerWidth > 1099 && window.innerHeight > 699 && backCard.classList.contains('is-flipped')) {
      backCardTitle.classList.remove('is-visible');
      backCard.classList.remove('is-flipped');
      backCardText.classList.remove('is-visible');

    }
  })
});