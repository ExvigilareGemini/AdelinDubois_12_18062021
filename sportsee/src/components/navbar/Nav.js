import React from 'react';
import HorizontalNavbar from './HorizontalNavbar';
import VerticalNavbar from './VerticalNavbar';

function Nav() {
	return (
		<nav className="Nav">
			<HorizontalNavbar />
			<VerticalNavbar />
		</nav>
	);
}

export default Nav;
