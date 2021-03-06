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

  // piwik event tracking
  if (window._paq) {
    window._paq.push([ 'trackEvent', 'Crowdfund_Player', 'Song_Play' ]);
  }
}

function afterStopTrack() {
	var controlsContainer = document.getElementById('controls-container');
	controlsContainer.className = "";
}
