function lightbox_open() {
    var lightBoxVideo = document.getElementById("vidabout");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#aboutavm").offset().top
    }, 50);
    
    document.getElementById('aboutvid').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("vidabout");
    document.getElementById('aboutvid').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }