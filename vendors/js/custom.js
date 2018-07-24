// (function ($) {

// 	$(window).load(function(){
//       ;
//       if($("#navigation").sticky({ topSpacing: 0 }) ) {
//         $("#navigation").css("background-color", "yellow");
//       }
//     });

// })(jQuery);
// (function($){

//   $(document).ready(
  
//     function(){
  
//       // Comprobar si estamos, al menos, 100 px por debajo de la posición top
//       // para mostrar o esconder el botón
//       $(window).scroll(function(){
  
//         if ( $('#navigation').scrollTop() > 0 ) {
  
//           $('#navigation').fadeOut(200);
  
//         } else {
  
//           $('#navigation').css({"background-color": "transparent", "transition": "all 10s ease"});
//           $('.fa-bars').css("color", "#c83539");
//           $("#navigation").sticky({ topSpacing: 0 });
//         }
  
//       });
  
//       // al hacer click, animar el scroll hacia arriba
//       $('.scroll-to-top').click( function( e ) {
  
//         e.preventDefault();
//         $('html, body').animate( {scrollTop : 0}, 800 );
  
//       });
  
//     });
  
//   })(jQuery);
$(document).ready(function(){
	var altura = $('#navigation').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
      $('#navigation').addClass('change');
      $('#navigation').css({
        "background-color": "white",
        // "padding": ".7rem 0",
      })
      $('.navbar-custom ul.nav li a').css({
        "color": "#c83539",
        "font-weight": "700",
        // "padding": ".7rem 0",
      })
      $('.navbar-toggle').css ({
        "background-color": "#c83539",
        // "border-radius": "0",
        // "padding-bottom": "5px",
      })
      $('.fa-bars').css(
        {
          // "padding": ".05rem",
          "color": "white"});
		} else {
			$('#navigation').removeClass('change');
		}
	});
 
});

