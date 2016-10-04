function beforeNewTrackPlay() {
	var currentWaveformTrack = document.getElementById('waveform').className
	if (currentWaveformTrack != Amplitude.getActiveSongMetadata().name) {
		wavesurfer.load(Amplitude.getActiveSongMetadata().url)
		document.getElementById('waveform').className = Amplitude.getActiveSongMetadata().name
	}
	var controlsContainer = document.getElementById('controls-container');
	controlsContainer.className = "open";

	var playingElement = getElementByClassName(document, 'currently-playing')
	if (playingElement) {
		playingElement.className = "playlist-item";
	}

	// super hacky
	document.querySelector('.playlist-item[amplitude-song-index="'+Amplitude.getIndex()+'"]').className += " currently-playing";
}

function afterStopTrack() {
	var controlsContainer = document.getElementById('controls-container');
	controlsContainer.className = "";
}

function afterInit() {
	var tracks = []
	for (i = 0; i < mockedSongs.length; i++) {
		// shouldn't be done this way - need metadata
		// tracks[i] = new Audio();
	 //  var track = Amplitude.getSongByIndex(i)
  // 	tracks[i].src = track.url
  // 	updateDuration(tracks[i], i)
	}
}

// NOT GOOD... but does initialize the track lengths.. time should be included in metadata?
function updateDuration(song, i) {
	setTimeout(() => {
	  var duration = song.duration
		var song_duration_seconds = ( Math.floor( duration % 60 ) < 10 ? '0' : '' ) +
		                    Math.floor( duration % 60 );

		var song_duration_minutes = Math.floor( duration / 60 );

		if( document.querySelector('[amplitude-single-duration-seconds="true"]') ){
		  document.querySelector('[amplitude-single-duration-seconds="true"]').innerHTML = song_duration_seconds;
		}else if( document.querySelector('.amplitude-duration-seconds[amplitude-song-index="'+i+'"]') ){
		  document.querySelector('.amplitude-duration-seconds[amplitude-song-index="'+i+'"]').innerHTML = song_duration_seconds;
		}

		if( document.querySelector('[amplitude-single-duration-minutes="true"]') ){
		  document.querySelector('[amplitude-single-duration-minutes="true"]').innerHTML = song_duration_minutes;
		}else if( document.querySelector('.amplitude-duration-minutes[amplitude-song-index="'+i+'"]') ){
		  document.querySelector('.amplitude-duration-minutes[amplitude-song-index="'+i+'"]').innerHTML = song_duration_minutes;
		}
	}, 2750 * (i+1))
}