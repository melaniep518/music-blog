import React from 'react';
import {Link} from 'react-router';

const Navbar = () => {
	return (
			<div>
        <nav>
          <div>
            <ul>
              <li><Link to="/tastetests">Taste tests</Link></li>
              <li><Link to="/seeingsounds">Seeing sounds</Link></li>
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