import React from 'react';
import {Link} from 'react-router';

const Navbar = () => {
	return (
			<div>
        <nav>
          <div>
            <ul>
              <li><Link to="/tastetests">Playlists</Link></li>
              <li><Link to="/seeingsounds">Videos</Link></li>
              <li><Link to="/newmusic">New Music</Link></li>
              <li><Link to="/hiddengems">Hidden Gems</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
        </nav>
      </div>
	)
}

export default Navbar;