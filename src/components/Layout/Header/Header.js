// -----------------------------------------------
//
// Components -> Header.js
// Desc: Header for web app
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';

// Components
import Sidebar from '../Sidebar';

// Styling
import { HeaderLogo, HeaderToolbar } from './HeaderStyledComponents';
// -----------------------------------------------

function Header() {
	return (
		<header>
			<nav>
				<AppBar position='static'>
					<HeaderToolbar>
						<HeaderLogo>Your Story</HeaderLogo>

						<Sidebar />
					</HeaderToolbar>
				</AppBar>
			</nav>
		</header>
	);
}

export default Header;
