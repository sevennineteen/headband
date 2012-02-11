/*
* HEADBAND created by Patric M DelCioppo.
* http://www.sevennineteen.com/
*/

var HEADBAND = {
  
  band: $('#headband'),
  band_height: 0,

  addStripe: function (notice, style, height_px) {
    
    function addToBand (stripe, stripe_height) {
      HEADBAND.band_height += stripe_height;
      var top = -(HEADBAND.band_height);
      HEADBAND.band.css('top', top.toString() + 'px');
      $(window).scroll(function() {
        if($(this).scrollTop() > 60) {
          HEADBAND.band.stop().animate({'top' : '0px'}, 500);
        } else {
          HEADBAND.band.stop().animate({'top' : top.toString() + 'px'}, 250);
        }
      });
      //HEADBAND.band.append(stripe.css('height', stripe_height.toString() + 'px'));
      var row_div = $('<div/>', {
        class: 'headband_row',
      });
      HEADBAND.band.append(row_div.append(stripe.css('height', stripe_height.toString() + 'px')));
    }
    
    var stripe_div = $('<div/>', {
      class: 'headband_stripe',
    });
    $(stripe_div).append(notice);
    if (style) {
      $(stripe_div).css(style);
    }
    addToBand(stripe_div, height_px || 24);
  }
}