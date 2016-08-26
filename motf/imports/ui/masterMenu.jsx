import React, { Component } from 'react';



// App component - represents the whole app
export default class MasterMenu extends Component {
   render() {
    return (
      <div className="master-menu-wrapper"> 
    		<ul className="master-menu-ul">
				<li className='master-menu-li'><img src="img/menu/icon-gear.png" alt="Main Menu" width="66" height="66" ></img></li>
				<hr></hr>
				<li className='master-menu-li'><img src="img/menu/icon-general.png" alt="Ovierview" width="66" height="66" ></img></li>
				<li className='master-menu-li'><img src="img/menu/icon-map.png" alt="Map" width="66" height="66" ></img></li>
				<li className='master-menu-li'><img src="img/menu/icon-ring.png" alt="Clan Ring" width="66" height="66" ></img></li>
				<li className='master-menu-li'><img src="img/menu/icon-structures.png" alt="Structures" width="66" height="66" ></img></li>
				<li className='master-menu-li'><img src="img/menu/icon-magicrituals.png" alt="Magic and Rituals" width="66" height="66" ></img></li>
				<li className='master-menu-li'><img src="img/menu/icon-treasure.png" alt="Treasure" width="66" height="66" ></img></li>
				<li className='master-menu-li'><img src="img/menu/icon-quill.png" alt="Statistics" width="66" height="66" ></img></li>
			</ul>
	 </div>
    );
  }
}

//import Image from '../../imports/api/Image.jsx'


// // App component - represents the whole app
// export default class MasterMenu extends Component {
   // render() {
    // return (
      // <div className="master-menu-wrapper"> 
    		// <ul className="master-menu-ul">
				// <li className='master-menu-li'><Image src={"img/menu/icon-gear.png"} alt="Main Menu" width={66} height={66}></Image></li>
				// <hr></hr>
				// <li className='master-menu-li'><Image src={"img/menu/icon-general.png"} width={66} height={66} ></Image></li>
				// <li className='master-menu-li'><Image src={"img/menu/icon-map.png"} width={66} height={66} ></Image></li>
				// <li className='master-menu-li'><Image src={"img/menu/icon-ring.png"} width={66} height={66} ></Image></li>
				// <li className='master-menu-li'><Image src={"img/menu/icon-structures.png"} width={66} height={66} ></Image></li>
				// <li className='master-menu-li'><Image src={"img/menu/icon-magicrituals.png"} width={66} height={66} ></Image></li>
				// <li className='master-menu-li'><Image src={"img/menu/icon-treasure.png"} width={66} height={66} ></Image></li>
				// <li className='master-menu-li'><Image src={"img/menu/icon-quill.png"} width={66} height={66}></Image></li>
			// </ul>    
	 // </div>
    // );
  // }
// }
