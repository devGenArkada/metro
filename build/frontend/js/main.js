'use strict';

window.onload = function() {

  var blocks = function() {
    $( window ).resize(function() {
      // header Height
      var headerFunction = function() {
        var headerHeight = $('.header').height();
        var firstScreenHeight = 'calc(100vh - ' + headerHeight + 'px)';
        $('.firstScreen').css('min-height', firstScreenHeight);
      }
      
      // firstScreenTitle Height
      var firstScreenTitleFunction = function() {
        var firstScreenTitleHeight = $('.firstScreen__title').height();
        var firstScreenTitleStrongTop = +firstScreenTitleHeight + 20;
        var firstScreenTitleStrongTop = firstScreenTitleStrongTop + 'px';
        $('.firstScreen__title strong').css('top', firstScreenTitleStrongTop);
      }
      
      // firstScreen Height
      var firstScreenHeightFunction = function(){
        var firstScreenHeight = $('.firstScreen').height();
        var firstScreenTitleHeight = $('.firstScreen__title').height();
        var firstScreenBlockHeight = 'calc(' +firstScreenHeight + 'px - ' + +firstScreenTitleHeight + 'px)';
        $('.firstScreenBlock').css('min-height', firstScreenBlockHeight);
      }
  
      // firstScreenBlock width
      var firstScreenBlockLeftWidth = $('.firstScreenBlockLeft').width();
      var firstScreenTitleStrongLeft = +firstScreenBlockLeftWidth + 20;
      var firstScreenTitleStrongLeft = firstScreenTitleStrongLeft + 'px';
      $('.firstScreen__title strong').css('left', firstScreenTitleStrongLeft);
      
      // firstScreenBlockLeftList max-width
      var firstScreenBlockLeftWidthFunction = function (){
        var firstScreenBlockLeftWidth = $('.firstScreenBlockLeft').width();
        var firstScreenBlockLeftListMaxWidth = +firstScreenBlockLeftWidth -30;
        var firstScreenBlockLeftListMaxWidth = +firstScreenBlockLeftListMaxWidth + 'px';
        $('.firstScreenBlockLeftList').css('max-width', firstScreenBlockLeftListMaxWidth);
      }

      headerFunction(); 
      firstScreenTitleFunction();
      firstScreenHeightFunction();
      firstScreenBlockLeftWidthFunction();
    }).resize();
  }

  blocks();

};