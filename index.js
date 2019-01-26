//TYPEWRITER EFFECT
var msg = document.getElementById("msg");

var typewriter = new Typewriter(msg, {
  loop: false
});

typewriter
  .typeString("hello.")
  .pauseFor(500)
  .deleteAll()
  .typeString("my name is Nasya")
  .pauseFor(700)
  .deleteAll()
  .start();

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
    percent: 85
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
    percent: 85
  });
});

$(document).ready(function() {
  $("#sass-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 85
  });
});

$(document).ready(function() {
  $("#react-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 65
  });
});

$(document).ready(function() {
  $("#redux-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 65
  });
});

$(document).ready(function() {
  $("#boot-circle").circliful({
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 90
  });
});

// ------------
// IMAGES
// ------------

$("figure").mouseleave(function() {
  $(this).removeClass("hover");
});
