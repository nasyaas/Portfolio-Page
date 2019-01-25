//TYPEWRITER EFFECT
var msg = document.getElementById("msg");

var typewriter = new Typewriter(msg, {
  loop: false
});

typewriter
  .typeString("hello.")
  .pauseFor(2000)
  .deleteAll()
  .typeString("my name is Nasya")
  .pauseFor(2000)
  .deleteAll()
  .start();

// ------------------
// PERCENTAGE CIRCLES
// ------------------

$(document).ready(function() {
  $("#html-circle").circliful({
    animation: 1,
    animationStep: 6,
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 88,
    iconColor: "#3498DB",
    icon: "f004",
    iconSize: "40",
    iconPosition: "middle"
  });
});

// ------------
// IMAGES
// ------------

$("figure").mouseleave(function() {
  $(this).removeClass("hover");
});
