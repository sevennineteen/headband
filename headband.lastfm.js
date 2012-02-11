/**
* @depends headband.js
* 
* Last.fm HEADBAND plugin.
* Adds stripe to headband if user is currently scrobbling on last.fm
* e.g., 'Right now, sevennineteen is listening to "20 Miles Up" by Tarwater.'
*/
HEADBAND.LASTFM = { 
  for: function (username, callback) {
    HEADBAND.LASTFM.username = username;
    this.getLastfmTrack( function (now_playing) {
      callback(now_playing);
    });
  },
  
  getLastfmTrack: function (callback) {
    $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0/user/' + HEADBAND.LASTFM.username + '/recenttracks.xml?limit=1',
      dataType: 'xml',
      success: function (xml) {
        var last_played = $(xml).find('track')[0];
        if (last_played) {
          if ($(last_played).attr('nowplaying') == 'true') {
            track = {};
            track.artist = $(last_played).find('artist').text();
            track.name = $(last_played).find('name').text();
            track.url = $(last_played).find('url').text();
            HEADBAND.LASTFM.makeTrackNotice(track, function () {
              callback(true);
            });
          } else {
            callback(false);
          };
        }
      }
    });
  },
  
  makeTrackNotice: function (track, callback) {
    var track_link = $('<a/>').attr({'href': track.url, 'class': 'headband_link', 'target': '_blank'})
      .append('&ldquo;' + track.name + '&rdquo;');
    var track_notice = $('<div/>', {
      text: 'Right now, '+ HEADBAND.LASTFM.username + ' is listening to '
    }).append(track_link).append(' by ' + track.artist + '.');
    
    HEADBAND.addStripe(track_notice, {'background': '#D51007', 'color': '#FFF'});
    callback();
  }
};