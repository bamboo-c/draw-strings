"use strict";

var Main = {

  //-------------------------------------------------
  // initialize
  //-------------------------------------------------
  init : function() {

    var elWrap = $(".wrap1");

    Main.walk( elWrap );

  },

  //-------------------------------------------------
  // walk
  //-------------------------------------------------
  walk : function( i_el ) {

    $.getJSON("data.json" , function(i_data) {

      var l = i_data.length;

      for( var i = 0; i < l; i++ ) {
        i_el.append( $("<li>").text( i_data[i] ));
      }

      Main.show( i_el );

    });

  },

  //-------------------------------------------------
  // show
  //-------------------------------------------------
  show : function( i_el ) {

    i_el.addClass("is-ready");

  }

};

Main.init();
