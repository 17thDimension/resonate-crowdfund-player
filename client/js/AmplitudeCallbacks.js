function beforeNewTrackPlay() {
	console.log('Amplitude.getActiveSongMetadata()', Amplitude.getActiveSongMetadata())
	wavesurfer.load(Amplitude.getActiveSongMetadata().url)
}