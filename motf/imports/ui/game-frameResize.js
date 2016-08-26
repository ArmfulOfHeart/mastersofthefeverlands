function resizeGameFrame() {
	//finding size difference between current window and target 1920 * 1080 window, expressed as a number between 0 and 1.
	var differenceX = window.innerWidth / 1920,
		differenceY = window.innerHeight / 1080;
	
	//Picking the smallest number (that way everything remains on screen)
	var smallestDifference = Math.min(differenceX, differenceY);
	
	//for Edge and Chrome
	document.getElementById('game-frame').style.zoom = smallestDifference;
	
	//for firefox
	//fuck firefox, they can scale themselves. Stupid-ass design.	
}

export default resizeGameFrame;