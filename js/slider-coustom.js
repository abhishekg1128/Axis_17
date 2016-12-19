jQuery(document).ready(function() {
  $('#to-nav-dot-1').on('click', function(){
    $('#carousel-buttons').find('.active').removeClass('active');
    $('#nav-dot-1').click();
    $('#to-nav-dot-1').addClass('active');
    $p = $('#to-nav-dot-1')
    // console.log('clicked');
  });

  $('#to-nav-dot-2').on('click', function(){
    $('#carousel-buttons').find('.active').removeClass('active');
    $('#nav-dot-2').click();
    $('#to-nav-dot-2').addClass('active');
    $p = $('#to-nav-dot-2')
    // console.log('clicked');
  });

	$('#to-nav-dot-3').on('click', function(){
    $('#carousel-buttons').find('.active').removeClass('active');
    $('#nav-dot-3').click();
    $('#to-nav-dot-3').addClass('active');
    $p = $('#to-nav-dot-3')
    // console.log('clicked');
  });

  $('#to-nav-dot-4').on('click', function(){
    $('#carousel-buttons').find('.active').removeClass('active');
    $('#nav-dot-4').click();
    $('#to-nav-dot-4').addClass('active');
    $p = $('#to-nav-dot-4')
    // console.log('clicked');
  });

  $('#to-nav-dot-5').on('click', function(){
    $('#carousel-buttons').find('.active').removeClass('active');
    $('#nav-dot-5').click();
    $('#to-nav-dot-5').addClass('active');
    $p = $('#to-nav-dot-5')
    // console.log('clicked');
  });

  $('#to-nav-dot-6').on('click', function(){
    $('#carousel-buttons').find('.active').removeClass('active');
    $('#nav-dot-6').click();
    $('#to-nav-dot-6').addClass('active');
    $p = $('#to-nav-dot-6')
    // console.log('clicked');
  });

  String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
  }

    $('#next-arrow').on('click', function(){
      $('#carousel-buttons').find('.active').removeClass('active');

      var id = $('#nav-dots').find('.nav-dot-current').attr('id');
      // id.charCodeAt(8) += id.charCodeAt(8) + 1;
      id = id.replaceAt(8, String.fromCharCode((id.charCodeAt(8) + 1)));

      if( id.charCodeAt(8) == 7 )
        id = id.replaceAt(8, String.fromCharCode(49));

      $("#to-"+ id ).addClass('active');
      console.log("#to-"+ $('#nav-dots').find('.nav-dot-current').attr('id') + '  ' + id);
    });

//   function myFunction() {
//     var c = document.getElementById('nav-dots').childNodes;
//     var i;
//
//     var dot;
//
//     for (i = 0; i < c.length - 1; i++) {
//         if( c[i].class == 'nav-dot-current');
//           dot = i / 2;
//     }
//
//     $('#carousel-buttons').find('.active').removeClass('active');
//     $('#to-nav-dot-' + dot).addClass('.active');
// }

});
