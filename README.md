# Resonate Crowdfunding Player

Basic player widget for the Resonate homepage for duration of the crowd campaign, based on Amplitude.js.

The client/ folder contains HTML, CSS and vanilla JS front-end code for the player which uses mocked songs for the moment.

### Development

Make sure to have 'local-web-server' installed globally `npm install local-web-server -g`

* Run `bower install && npm install`
* Run `gulp` to build the js file and run the local web server
* Open `http://localhost:8000/client/`


TODOs:
* gulp task to replace server url in development/production
* production build task (replace url, minify-css and uglify)
* ... button in the header ? Shuffle button
		* shuffle button?
* Links for modal - check if these are right!
		* will ask peter
* Colored waveform
* Amplitude breaks in shuffle mode ???
