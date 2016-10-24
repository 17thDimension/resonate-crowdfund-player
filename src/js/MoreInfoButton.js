function toggleMoreInfo(e) {
	var playlists = document.getElementsByClassName('playlist-item');
	var songIndex = e.srcElement.attributes['amplitude-song-index'].value;
	var eleSelector = 'playlist-item-' + songIndex

	for (var i = 0; i < playlists.length - 1; i++) {
		var playlistEl = document.getElementById('playlist-item-' + i);
		if (i === parseInt(songIndex)) {
			playlistEl.classList.toggle('open');
		} else {
			playlistEl.classList.remove('open');
		}
	}

	e.srcElement.classList.toggle('mdi-chevron-up')
	e.srcElement.classList.toggle('mdi-chevron-down')
}