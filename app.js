$(document).ready(function(){

  // carousel banner
  $("#carousel_banner .owl-carousel").owlCarousel({
    items:1,
    center: true,
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
  });

  // carousel product
  $('#carousel_product .owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});