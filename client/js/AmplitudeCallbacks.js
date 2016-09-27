function beforeNewTrackPlay() {
	var currentWaveformTrack = document.getElementById('waveform').className
	if (currentWaveformTrack != Amplitude.getActiveSongMetadata().name) {
		wavesurfer.load(Amplitude.getActiveSongMetadata().url)
		document.getElementById('waveform').className = Amplitude.getActiveSongMetadata().name

	}
}