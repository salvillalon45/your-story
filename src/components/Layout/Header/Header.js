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
import Toolbar from '@material-ui/core/Toolbar';
// -----------------------------------------------

function Header() {
	return (
		<header>
			<nav>
				<AppBar position='static'>
					<Toolbar>
						<div className='appInfoContainer'>
							<h1>Your Story</h1>
						</div>
					</Toolbar>
				</AppBar>
			</nav>
		</header>
	);
}

export default Header;
