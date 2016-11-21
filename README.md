[![Stories in Ready](https://badge.waffle.io/resonatecoop/resonate-crowdfund-player.png?label=ready&title=Ready)](https://waffle.io/resonatecoop/resonate-crowdfund-player)
# Resonate Crowdfunding Player

Basic player widget for the Resonate homepage for duration of the crowd campaign, based on Amplitude.js.

The src/ folder contains HTML, CSS and vanilla JS front-end code for the player which uses mocked songs for the moment.

### Development

Make sure to have 'local-web-server' installed globally `npm install local-web-server -g`

* Run `bower install && npm install`
* Run `gulp` to build the js file and run the local web server `ws`
* Open `http://localhost:8000/src/`

### Production

Source files are built into dist/ folder
* Run `gulp build:production`
