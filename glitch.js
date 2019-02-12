//TYPEWRITER EFFECT
var msg = document.getElementById("msg");

var typewriter = new Typewriter(msg, {
  loop: false
});

typewriter
  .typeString("my name is Nasya")
  .deleteAll()
  .start();

window.addEventListener("hashchange", function() {
  scrollBy(0, -100);
});

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 900) {
//     $("header").css({
//       display: "none"
//     });
//   }
// });

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 900) {
//     $("#msg").css({
//       display: "white"
//     });
//   }
// });

// ------------------
// PERCENTAGE CIRCLES
// ------------------

$(document).ready(function() {
  $("#html-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    pointSize: 50,
    percent: 100
  });
});

$(document).ready(function() {
  $("#css-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 95
  });
});

$(document).ready(function() {
  $("#js-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 70
  });
});

$(document).ready(function() {
  $("#node-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 90
  });
});

$(document).ready(function() {
  $("#jquery-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 75
  });
});

$(document).ready(function() {
  $("#sass-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 80
  });
});

$(document).ready(function() {
  $("#react-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 70
  });
});

$(document).ready(function() {
  $("#redux-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 70
  });
});

$(document).ready(function() {
  $("#boot-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 90
  });
});

// -------------
// TRANSITIONS
// -------------

ScrollReveal().reveal(".glitch", {
  delay: 6000,
  easing: "ease-in"
});

ScrollReveal().reveal(".arrow", {
  delay: 6500,
  distance: "-50px",
  easing: "ease-in"
});

ScrollReveal().reveal("nav", {
  delay: 7000,
  easing: "ease-in"
});

ScrollReveal().reveal(".b1", {
  distance: "50px",
  origin: "left",
  delay: 400,
  easing: "ease-in"
});

ScrollReveal().reveal(".b2", {
  distance: "50px",
  origin: "right",
  delay: 400,
  easing: "ease-in"
});

ScrollReveal().reveal(".b3", {
  distance: "50px",
  origin: "left",
  delay: 400,
  easing: "ease-in"
});

ScrollReveal().reveal(".b4", {
  distance: "50px",
  origin: "right",
  delay: 400,
  easing: "ease-in"
});
