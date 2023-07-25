
window.addEventListener("resize", getfooterHeight);
window.addEventListener("DOMContentLoaded",function(){
    getfooterHeight()
    typeWriter();
});


function getfooterHeight() {
    let footerHeight =  $('.footer').outerHeight();
    $('.nav-tabs-container').css('max-height', `calc(100% - ${footerHeight}px)`)
} 



$('.work__content-text').click(function(){
  $('.work__content-container').addClass('active')
  $('.work-wrapper').addClass('active')
  $('.work-content').removeClass('d-block');
   let current = $(this).attr('data-target');
   $(current).addClass('d-block')
})

$(".slider").click(function(){
  slides();
})

$('.video-container').click(function(){
  $(this).find('video').attr('controls','true');
})
$('.work-wrapper .close-btn-modal').click(function(){
  $('.work__content-container').removeClass('active')
  $('.work-wrapper').removeClass('active')
})
$('.gallery__img').click(function(){
  if($(this).find('[data-target]')) {
    $('.gallery__content').addClass('active')
    $('.gallery-wrapper').addClass('active')
    $('.gallery-content').removeClass('d-block');
     let current = $(this).attr('data-target');
     $(current).addClass('d-block')
     setTimeout(getfooterHeight, 100)
  }
})
$('.gallery-wrapper .close-btn-modal').click(function(){
  $('.gallery__content').removeClass('active')
  $('.gallery-wrapper').removeClass('active')
})

$('.work__content-text').mouseenter(function(){
  if($( window ).width() > 1800) {
    if($(this).find('.modal-hover-text').html().length > 150) {
      $(this).find('.text-end').hide();
    }
  }
 else if($( window ).width() < 1800) {
    if($(this).find('.modal-hover-text').html().length > 150) {
      $(this).find('.text-end').hide();
    }
  }
 else if($( window ).width() < 1400) {
    if($(this).find('.modal-hover-text').html().length > 150) {
      $(this).find('.text-end').hide();
    }
  }
})

$('.work__content-text').mouseleave(function(){
  $('.text-end').show();
})

$('.slick-video-container').click(function() {
  $(this).find('iframe').css('z-index','1');
})




const $bigBall = document.querySelector(".cursor__ball--big");
const $hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15,
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 3,
  });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
  });
}


function slides() {
  $('.slick-video-container').slick({
    dots: true,
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}

var typed6 = new Typed(".info__text", {
  strings: [
    "I'm Josef, a dedicated, disciplined, and dynamic designer who  makes purposeful and pragmatic designs. I am most interested in the intersection of design and technology, helping create content and experiences to alleviate pain points and humanise technology.",
  ],
  typeSpeed: 25,
  backSpeed: 0,
  loop: true,
});



var j$ = jQuery,
    $nav = j$(".navbar-left"),
    $slideLine = j$(".nav-border"),
    $currentItem = j$(".nav-link.active");


j$(function(){  
  // Menu has active item
  if (j$(".nav-link.active")) {
    $slideLine.css({
      "width": j$(".nav-link.active").outerWidth(),
      "height": j$(".nav-link.active").outerHeight(),
      "left": j$(".nav-link.active").position().left
    });
  }
  
  // Underline transition
  j$($nav).find(".nav-link").hover(
    // Hover on
    function(){
      $slideLine.css({
        "width": j$(this).outerWidth(),
        "height": j$(this).outerHeight(),
        "left": j$(this).position().left
      });
    },
    // Hover out
    function(){
      if (j$(".nav-link.active")) {
        // Go back to current
        $slideLine.css({
          "width": j$(".nav-link.active").outerWidth(),
          "height": j$(".nav-link.active").outerHeight(),
          "left": j$(".nav-link.active").position().left
        });
      } else {
        // Disapear
        $slideLine.width(0);
      }
    }
   );
});


$('.nav-tabs .nav-link').click(function(){
    if($('.work-wrapper,.gallery__content').hasClass('active')) {
      $('.work-wrapper,.gallery__content ').removeClass('active');
      $('.work__content-container,.gallery-wrapper').removeClass('active');
    }
})