
$(document).ready(() => {
  $(".card").flip();

  $(".btn_start").on("click", () => {
    $("#cover").fadeOut();
    console.log("test");
  })

let images = ["img/logo.png", "img/lions.png", "img/wings.png", "img/pistons.png", "img/faygo.png", "img/tigers.png"];
let imagesused = [];
let rand;

$(".back").each(function() {
  rand = Math.floor(Math.random() * images.length);
  $(this).append('<img src="' + images[rand] + '">');
  if (imagesused.search(images[rand]) != -1) images.splice(rand, 1);
  else (imagesused.push(images[rand]));
});

console.log('<img src="' + images[rand] + '">');
// console.log(images[rand]);
// console.log(images[rand]);





}) 