;(function ($) {
  // open second form
   var moreOptionBtn = $('.more-option');
   var secondForm = $('.second-form');

   moreOptionBtn.on('click', function (){
       secondForm.slideToggle();
       moreOptionBtn.toggleClass('open');
   });

// init slick slider
$('.areas-slick-js').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  // centerMode: true,
  responsive:[
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 4,
       }
    },
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 2,
       }
    },
    {
      breakpoint: 479,
      settings: {
      slidesToShow: 1,
       }
    }
  ]
});

// open search-form
  var serchIcon = $('.serch-ic');
  var searchForm = $('.search-form');
  serchIcon.on('click', function (){
  // searchForm.slideToggle(1000);
  searchForm.animate({width:'toggle'}, 500);
  serchIcon.toggleClass('open');
      
   });
 


})(jQuery);
