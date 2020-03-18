// Set height of about id on site load.
var aboutheight = 0;
var about = $(this)
        
$('#about').children().each(function(){    
    $('#about').children().each(function(){
        aboutheight = aboutheight += about.outerHeight(true);
        console.log($(this))
        console.log(aboutheight)
    });
    $('#about').height(aboutheight);
});

// On window resize, run to determine new about height

var id;
$(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(doneResizing, 500);
    
});

function doneResizing(){
     
    var aboutheight = 0;
    var about = $(this)
        
    $('#about').children().each(function(){
        aboutheight = aboutheight += about.outerHeight(true);
        console.log($(this))
        console.log(aboutheight)
    });
    $('#about').height(aboutheight);
    
}
// var aboutavmHeight = 0;
// var aboutavm = $(this);

// $('#aboutavm').children().each(function(){
//     aboutavmHeight = aboutavmHeight += aboutavm.outerHeight(true);

//     console.log(aboutavm.outerHeight(true));
//     console.log($(this));
// });
// $('#aboutavm').height(aboutavmHeight);
