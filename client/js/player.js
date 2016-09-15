var mockedSongs = [
  {
    name: "Song Name 1",
    artist: "Artist Name",
    album: "Album Name",
    url: "./assets/songs/song1.mp3",
    cover_art_url: "./assets/cover/art1.jpg"
  }, {
    name: "Song Name 2",
    artist: "Artist Name 2",
    album: "Album Name ",
    url: "./assets/songs/song2.mp3",
    cover_art_url: "./assets/cover/art2.jpg"
  }, {
    name: "Song Name 3",
    artist: "Artist Name",
    album: "Album Name",
    url: "./assets/songs/song1.mp3",
    cover_art_url: "./assets/cover/art1.jpg"
  }, {
    name: "Song Name 4",
    artist: "Artist Name",
    album: "Album Name",
    url: "./assets/songs/song2.mp3",
    cover_art_url: "./assets/cover/art2.jpg"
  }, {
    name: "Song Name 5",
    artist: "Artist Name",
    album: "Album Name",
    url: "./assets/songs/song1.mp3",
    cover_art_url: "./assets/cover/art1.jpg"
  }, {
    name: "Song Name 6",
    artist: "Artist Name",
    album: "Album Name",
    url: "./assets/songs/song2.mp3",
    cover_art_url: "./assets/cover/art2.jpg"
  }, {
    name: "Song Name 7",
    artist: "Artist Name",
    album: "Album Name",
    url: "./assets/songs/song1.mp3",
    cover_art_url: "./assets/cover/art1.jpg"
  }
];

Amplitude.init({
  'songs' : mockedSongs
});

var playlistEl = document.getElementById('playlist');
var playlistItemTmp = getElementByClassName(playlistEl, 'playlist-item');

for (i = 0; i < mockedSongs.length; i++) {
  playlistEl.appendChild(createPlaylistItem(i, mockedSongs[i]));
}

function createPlaylistItem(i, playListItem) {
  var playlistItemTmpCopy = playlistItemTmp.cloneNode(true);
  playlistItemTmpCopy.id = '';
  // Add play/pause clickable cover
  var coverImg = getElementByClassName(playlistItemTmpCopy, 'amplitude-play-pause');
  coverImg.src = playListItem.cover_art_url;
  coverImg.setAttribute('amplitude-song-index', i);
  // Add number
  var songNumberEl = getElementByClassName(playlistItemTmpCopy, 'song-number');
  songNumberEl.innerHTML = i + 1;
  // Add artist name and song name
  var artistNameEl = getElementByClassName(playlistItemTmpCopy, 'artist-name');
  artistNameEl.innerHTML = playListItem.artist;
  var songNameEl = getElementByClassName(playlistItemTmpCopy, 'song-name');
  songNameEl.innerHTML = playListItem.name;
  // TODO add duration
  return playlistItemTmpCopy;
}

function getElementByClassName(el, className) {
  return el.getElementsByClassName(className)[0];
}
