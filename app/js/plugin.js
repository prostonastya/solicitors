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
});

// open search-form
  var serchIcon = $('.serch-ic');
  var searchForm = $('.search-form');
  serchIcon.on('click', function (){
  // searchForm.slideToggle(1000);
  searchForm.animate({width:'toggle'}, 1000);
  serchIcon.toggleClass('open');
      
   });
 


})(jQuery);
