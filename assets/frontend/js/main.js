'use strict';

window.onload = function() {
  $(window).on('resize', function(){
    console.log('fdfdf');    
  });

  var blocks = function() {
    $( window ).resize(function() {
      console.log('1');
      // header Height
      var headerHeight = $('.header').height();
      var firstScreenHeight = 'calc(100vh - ' + headerHeight + 'px)';
      $('.firstScreen').css('min-height', firstScreenHeight);
      
      // // firstScreenTitle Height
      var firstScreenTitleHeight = $('.firstScreen__title').height();
      // console.log(firstScreenTitleHeight);
      var firstScreenTitleStrongTop = +firstScreenTitleHeight + 20;
      // console.log(firstScreenTitleStrongTop);
      var firstScreenTitleStrongTop = firstScreenTitleStrongTop + 'px';
      // console.log(firstScreenTitleStrongTop);
      $('.firstScreen__title strong').css('top', firstScreenTitleStrongTop);
      
      // // firstScreen Height
      var firstScreenHeight = $('.firstScreen').height();
      console.log(firstScreenHeight);
      var firstScreenTitleHeight = $('.firstScreen__title').height();
      console.log(firstScreenTitleHeight);
      var firstScreenBlockHeight = 'calc(' +firstScreenHeight + 'px - ' + +firstScreenTitleHeight + 'px)';
      console.log(firstScreenBlockHeight);
      $('.firstScreenBlock').css('min-height', firstScreenBlockHeight);
  
      // // firstScreenBlock width
      var firstScreenBlockLeftWidth = $('.firstScreenBlockLeft').width();
      var firstScreenTitleStrongLeft = +firstScreenBlockLeftWidth + 20;
      var firstScreenTitleStrongLeft = firstScreenTitleStrongLeft + 'px';
      $('.firstScreen__title strong').css('left', firstScreenTitleStrongLeft);
      
      // // firstScreenBlockLeftList max-width
      var firstScreenBlockLeftWidth = $('.firstScreenBlockLeft').width();
      var firstScreenBlockLeftListMaxWidth = +firstScreenBlockLeftWidth -30;
      var firstScreenBlockLeftListMaxWidth = +firstScreenBlockLeftListMaxWidth + 'px';
      $('.firstScreenBlockLeftList').css('max-width', firstScreenBlockLeftListMaxWidth);
    }).resize();
  }

  blocks();

};