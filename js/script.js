"use strict";

$(document).ready(() => {

  let images = ["img/faygo.png", "img/lions.png", "img/logo.png", "img/pistons.png", "img/tigers.png", "img/wins.png"];
  let imagesused = [];
  let rand;
  let clickedCard;
  let currentCards = [];
  let card1;
  let card2;
  

  $(".card").flip();
  
  // start button
  $(".btn_start").on("click", () => {
      startGame();
      $("#cover").fadeOut(); // fades the start game menu out
    })
     // calling start game function
    // console.log('starting game fading out menu');

  $(".reset").on("click", () => {
    resetGame();
  })

  $(document).on('click', '.front', (e) => {
    clickedCard = $(e.target).parent().siblings(".back").children().attr("src"); // The Image of the card we clicked
    currentCards.push($(e.target).parent().parent()); 
    card1 = currentCards[0]; // First card we clicked
    card2 = currentCards[1]; // Second card we clicked

    if (currentCards.length === 2) {
      compare();
      currentCards = [];
    }
    // console.log(card1);
    // console.log(card2);
    // console.log(currentCards); 
  });

  function compare() {
    
      if (card1 === card2) {
        score += 100;
        $(".score").text(`Score: ${score}`);
        console.log(score);
        console.log('you made a match');
        $(currentCards["0"]["0"]).hide();
        $(currentCards[1]["0"]).hide();
        if (score === 600) {
          console.log("you win");
          // winGame();
        }
      } else {
        card1.flip();
        card2.flip();
        console.log("yo");
      }
  }

  function startGame() {
    $('.back').each(function () {
      rand = Math.floor(Math.random() * images.length); // generates random number based on array length
      $(this).append('<img src="' + images[rand] + '">'); // adding image to back side of each div
      if (imagesused.indexOf(images[rand]) !== -1) { // searched images 'used' array if the index of this image is not used in the array it will splice the image out of the array
        images.splice(rand, 1);
      } else {
        imagesused.push(images[rand]); // if 
      }
      // console.log(images[rand]);
    });

    $(".front").each(function() {
      $(this).append('<img src="img/grand-circus-logo.jpg">');
    })
  }


  function resetGame() {
    $("#cover").fadeIn();
  }


  /*
  $(".back").each(function() {
    rand = Math.floor(Math.random() * images.length);
    $(this).append('<img src="' + images[rand] + '">');
    if (imagesused.search(images[rand]) != -1) images.splice(rand, 1);
    else (imagesused.push(images[rand]));
  });
  
  console.log('<img src="' + images[rand] + '">');
  // console.log(images[rand]);
  // console.log(images[rand]);
  */


  //Work on reset function, have both images show before turning back over
  // If match keep both face up not remove.

})