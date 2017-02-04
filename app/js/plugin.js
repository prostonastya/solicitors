;(function ($) {
   var moreOptionBtn = $('.more-option');
   var secondForm = $('.second-form');

   moreOptionBtn.on('click', function (){
       secondForm.slideToggle();
       moreOptionBtn.toggleClass('open');
   });
})(jQuery);
