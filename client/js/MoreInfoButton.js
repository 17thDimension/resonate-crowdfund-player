function toggleMoreInfo(e) {
	var playlists = document.getElementsByClassName('playlist-item');
	var songIndex = e.srcElement.attributes['amplitude-song-index'].value;
	var eleSelector = 'playlist-item-' + songIndex
	var playlistEl = document.getElementById('playlist-item-' + songIndex);

	for (var i = 0; i < playlists.length; i++) {
    playlists[i].classList.remove('open');
	}
	playlistEl.classList.toggle('open')

	e.srcElement.classList.toggle('mdi-chevron-up')
	e.srcElement.classList.toggle('mdi-chevron-down')
}