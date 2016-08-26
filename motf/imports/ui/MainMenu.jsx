import React, { Component } from 'react';

export default class MainMenu extends Component {
 render() {
    return (
		<div className='main-menu-wrapper'>
			<div className='main-menu-title-wrapper'>
				<h1 className='main-menu-title'>Masters of the Feverlands</h1>
			</div>
			<div className='main-menu-ul-wrapper'>
				<ul className='main-menu-ul'>
					<li className='main-menu-li'><h3 className='main-menu-h3'>Continue</h3></li>
					<li className='main-menu-li'><h3 className='main-menu-h3'>New</h3></li>
					<li className='main-menu-li'><h3 className='main-menu-h3'>Save</h3></li>
					<li className='main-menu-li'><h3 className='main-menu-h3'>Load</h3></li>
					<li className='main-menu-li'><h3 className='main-menu-h3'>Settings</h3></li>
					<li className='main-menu-li'><h3 className='main-menu-h3'>Development</h3></li>
				</ul>
			</div>
		</div>
    );
  }
}