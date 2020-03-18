// INIT ANIMATIONS

AOS.init({
  startEvent: 'load'
});

var rellax = new Rellax('.rellax', {
  center: true
});


//Toggle Sidebar

$(document).ready(function () {
    $(".clickbtn").on('click', function () {
      $(".sidebar").toggleClass("active"); 
      $(".clickbtn").toggleClass("toggle");
    })
    $(".sidebar a").on('click', function () {
      $(".sidebar").toggleClass("active"); 
      $(".clickbtn").toggleClass("toggle");
    })
});

//scroll Click

$(".sideHome").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#lpage").offset().top
  }, 2000);
});

$(".scrolldown, .sideAbout").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#about").offset().top
  }, 2000);
});

$(".sideAvm").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#aboutavm").offset().top
  }, 2000);
});

$(".sideContact").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#contact").offset().top
  }, 2000);
});


//animate traiangle on about without library

var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();

var svg = document.getElementById('triasvg');

function isElementInViewport(el) {
  var triang = el.getBoundingClientRect();
  var isOutside = (triang.top >= window.innerHeight) || (triang.bottom <= 0);
  return !isOutside;
}
window.addEventListener('scroll', function(e) {
  svg.classList.toggle('in-view', isElementInViewport(svg));
});


// SCROLL ON VIDEO ON MODAL CLOSE

$("#diagModal").on('hide.bs.modal', function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#aboutavm").offset().top
  }, 1000);
});


//TAB CONTROL
$(".avmtype").on('click', function(e) {
  e.preventDefault();

  var tab = $(this);

  console.log(tab);

});