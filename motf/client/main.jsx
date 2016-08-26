import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';
import MasterMenu from '../imports/ui/MasterMenu.jsx';
import MainMenu from '../imports/ui/MainMenu.jsx';

import resizeGameFrame from '../imports/ui/game-frameResize.js';

Meteor.startup(() => {
  //render(<App />, document.getElementById('content-frame'));
  render(<MainMenu />, document.getElementById('content-frame'));
  render(<MasterMenu />, document.getElementById('master-menu-container'));
});


window.addEventListener("resize", resizeGameFrame, false);
window.addEventListener("load", onLoad, false);

function onLoad () {
	resizeGameFrame();
}
