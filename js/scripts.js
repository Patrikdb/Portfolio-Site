





// ----- NAV -----

// NAVBAR SHOW
$(document).ready(function(){
  $(".menu-icon").on("click", function(){
    $("nav ul").toggleClass("showing");
  });
});

// NAVBAR SCROLL
$(window).on("scroll", function() {
  if($(window).scrollTop()){
    $('nav').addClass('black');
  } else{
    $('nav').removeClass('black');
  }
})






var CSStransforms = anime({
  targets: '#project1',
  translateX:{ value: [-1500, 0], duration: 2000, delay: 0, elasticity: 400 },
    scale: {
    value: [0.5, 1],
    duration: 1600,
    delay: -200,
    easing: 'easeInOutQuart'
  },
  rotate: {
    delay: -200,
    value: 360,
    duration: 800,
    easing: 'easeInOutSine'
  },
  duration: 4000
});

var CSStransforms = anime({
  targets: '#project2',
  delay: 200,
  translateX:{ value: [-1500, 0], duration: 3000, delay: 600, elasticity: 400 },

    scale: {
    value: [0.5, 1],
    duration: 1600,
    delay: 1000,
    easing: 'easeInOutQuart'
  },
  rotate: {
    delay: 600,
    value: 360,
    duration: 1000,
    easing: 'easeInOutSine'
  },
  duration: 4000
});

var CSStransforms = anime({
  targets: '#project3',
  translateX:{ value: [-1500, 0], duration: 2000, delay: 200, elasticity: 0 },

    scale: {
    value: [0.5, 1],
    duration: 1600,
    delay: 1000,
    easing: 'easeInOutQuart'
  },
  rotate: {
    delay: 1000,
    value: 360,
    duration: 1000,
    easing: 'easeInOutSine'
  },
  duration: 4000
});


var CSStransforms = anime({
  targets: '#project4',
  translateX:{ value: [-1500, 0], duration: 3000, delay: 800, elasticity: 0 },

    scale: {
    value: [0.5, 1],
    duration: 1600,
    delay: 1000,
    easing: 'easeInOutQuart'
  },
  rotate: {
    delay: 1000,
    value: 360,
    duration: 600,
    easing: 'easeInOutSine'
  },
  duration: 4000
});
