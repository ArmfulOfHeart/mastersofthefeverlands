import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';


import resizeGameFrame from '../imports/ui/game-frameResize.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('content-frame'));
});


window.addEventListener("resize", resizeGameFrame, false);
window.addEventListener("load", onLoad, false);

function onLoad () {
	resizeGameFrame();
}
