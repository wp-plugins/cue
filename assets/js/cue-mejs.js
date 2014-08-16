/*global _cueSettings:false, cue:false, MediaElementPlayer:false, mejs:false */

window.cue = window.cue || {};

(function( window, $, undefined )  {
	'use strict';

	$.extend( MediaElementPlayer.prototype, {

		buildaudiothememark: function( player, controls, layers, media ) {
			layers.append( '<a href="http://audiotheme.com/" target="_blank" class="mejs-audiotheme-mark">AudioTheme</a>' );
		},

		buildcuebackground: function( player, controls, layers, media ) {
			var $background = player.container.append( $( '<img />', {
				'class': 'mejs-player-background',
				src: player.options.cueBackgroundUrl
			})).find( '.mejs-player-background' );

			player.$node.on( 'setTrack.cue', function( e, track, player ) {
				track.thumb = track.thumb || {};

				if ( '' === player.options.cueBackgroundUrl ) {
					$background.attr( 'src', track.thumb.src );
				}
			}).trigger( 'backgroundCreate.cue', player );
		}
	});

})( this, jQuery );
