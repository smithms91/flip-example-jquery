$(document).ready(() => {

  let images = ["img/faygo.png", "img/lions.png", "img/pistons.png", "img/tigers.png", "img/wings.png", "img/logo.png"];
  let imagesused = [];
  let twoImages = [];
  let rand;
  let imageOne, imageTwo;
  let currentCards = [];
  let clickedCard;
  let score = 0;
  let container = $("#card_container");

  $(".win_game").hide();
  $(".card").flip();

  // start button
  $(".btn_start").on("click", () => {
    $(".card").show();
    startGame(); // calling start game function
    $("#cover").fadeOut();
    $(".win_game").fadeOut(); // fades the start game menu out
  });
  $('.play_again').on('click', () => {
    window.location.reload(true);
  })
  $(".reset").on("click", () => {
    currentCards = [];
    imagesused = [];
    $("#cover").fadeIn();
    window.location.reload(true);
  });

  $(document).on('click', '.front', (e) => {
    clickedCard = $(e.target).parent().siblings(".back").children().attr("src"); // The actual image src w clicked (back side)
    currentCards.push($(e.target).parent().parent()); // The actual cards we clicked into an array
    twoImages.push(clickedCard);
    if (twoImages.length === 2) {
      setTimeout(compare, 500);
    }
  });

  function flipCards() {
    $(currentCards["0"]["0"]).flip(false);
    $(currentCards[1]["0"]).flip(false);
  }

  function compare() {
    imageOne = twoImages[0];
    imageTwo = twoImages[1];
    if (imageOne === imageTwo) {
      score += 100;
      $(".score").text(`Score: ${score}`);
      $(currentCards["0"]["0"]).css('visibility', 'hidden');
      $(currentCards[1]["0"]).css('visibility', 'hidden');
      twoImages = [];
      currentCards = [];
      if (score === 600) {
        $(".win_game").fadeIn();
      }
    } else {
      setTimeout(flipCards(), 1000);
      twoImages = [];
      currentCards = [];
    }
  }

  function startGame() {
    $(".back").each(function (index1, elem) {
      $(elem).html("");
    });
    $('.back').each(function () {
      rand = Math.floor(Math.random() * images.length); // generates random number based on array length
      $(this).append('<img src="' + images[rand] + '">'); // adding image to back side of each div
      if (imagesused.indexOf(images[rand]) !== -1) { // searched images 'used' array if the index of this image is not used in the array it will splice the image out of the array
        images.splice(rand, 1);
      } else {
        imagesused.push(images[rand])
      }
      currentCards = [];
      twoImages = [];
    });

    $(".front").each(function () {
      $(this).append('<img src="img/grand-circus-logo.jpg">');
    })
  }
});