(function(){
  
  'use-strict';
  
  $('.menu').on('click',function(){
    $('.main-inner').toggleClass('active');
    $('.sidebar').toggleClass('show');
  });
  
  var links = function(el){
    $('[data-link="'+el+'"]').on('click',function(){
      $('[data-page="'+el+'"]').animate({
        top: 50
      },600,function(){
        $('[data-page="'+(el)+'"]').siblings().animate({
          top: box_size
        },500);
        $('.main-inner').toggleClass('active');
        $('.sidebar').toggleClass('show');
      });
    });
  }
  
  var box_size = $('[data-page]').width()+50,out = '';
  for (var i = 1; i < $('.box').length+1; i++) {
    if(i > 1){
      $('[data-page="'+i+'"]').css('top',box_size+'px');
    }
    links(i);
  }
})(jQuery);