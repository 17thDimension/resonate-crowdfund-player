# Resonate Crowdfunding Player

Basic player widget for the Resonate homepage for duration of the crowd campaign, based on Amplitude.js.

The client/ folder contains HTML, CSS and vanilla JS front-end code for the player which uses mocked songs for the moment. Related assets files should be added to the folder assets/ for development and testing purposes.

### Assets

* Add album cover arts in .jpg in client/assets/cover/ folder
* Add tracks in .mp3 in client/assets/songs/ folder
* Update `mockedSongs`in client/js/player.js with appropriate assets names

### Development

* Run `bower install && npm install`
* Run `ws` and open `http://localhost:8000/client/`
