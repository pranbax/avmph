// INITIALIZE

AOS.init({
  startEvent: 'load'
});

var rellax = new Rellax('.rellax', {
  center: true
});


//Fade in document Toggle Sidebar

$(document).ready(function () {

    $(".clickbtn").on('click', function () {
      $(".sidebar").toggleClass("active"); 
      $(".clickbtn").toggleClass("toggle");
      $(".overlay").toggleClass("active");
      $(".wrapper").toggleClass("active");

      $.each($(".dropdown-container"), function(){
        if ($(this).css('display') === 'block') {
          $(this).css('display', 'none');
        };
      });
      
    })
    $(".sidebar a").on('click', function () {
      $(".sidebar").toggleClass("active"); 
      $(".clickbtn").toggleClass("toggle");
      $(".overlay").toggleClass("active");
      $(".wrapper").toggleClass("active");
    })
});

//navbtn on mouse hover
$(".clickbtn").hover(
  function() { 
    if (!$("#menu-btn").hasClass("toggle")) {
      $("img.navbtn-icon").addClass("hover"); 
    } 
  }, 
  function() { 
    if (!$("#menu-btn").hasClass("toggle")) {
      $("img.navbtn-icon").removeClass("hover");
    } else {
      $("img.navbtn-icon").removeClass("hover");
    }
});


// scroll to page on click

$(".card-link, .sidebar a, .nav-footer a").on('click', function() {
  var href = $(this).attr('href')
  $([document.documentElement, document.body]).animate({
      scrollTop: $(href).offset().top
  }, 2000);
});

// Side nav Dropdown
let dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


// animate triangle on about without library //

let triangle = document.getElementById("triangle");
let length = triangle.getTotalLength();

let svg = document.getElementById('triasvg');

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

//TYPES SCRIPT TAB
$(".avmtype").on('click', function(e) {
  e.preventDefault();

  $('.avmtype.tabcurrent').removeClass('tabcurrent');
  $("div.type-description p.active").removeClass('active');

      var menu = $(this);
      var div = menu.children();
      var p = div.children();

  menu.addClass('tabcurrent');
  p.addClass('active');
});
$("a.avmtype").on('click', function(e) {
  e.preventDefault();

  var tab = $(this).attr("href");

  $('.tab-cont.active').removeClass("active");
  $('.tab-cont').filter(tab).addClass("active");
  $(tab).fadeIn();
});
