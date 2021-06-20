import React from 'react';
import HorizontalNavbar from './HorizontalNavbar';
import VerticalNavbar from './VerticalNavbar';

function Nav() {
	return (
		<nav className="nav">
			<HorizontalNavbar />
			<VerticalNavbar />
		</nav>
	);
}

export default Nav;
