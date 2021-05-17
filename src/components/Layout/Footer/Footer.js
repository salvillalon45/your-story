// -----------------------------------------------
//
// Layout -> Footer.js
// Desc: Footer for web app
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

function Footer() {
	return (
		<footer className='footerContainer'>
			<AppBar position='static'>
				<Toolbar>
					<div className='appInfoContainer'>
						<p className='xLarge'>
							<a href='https://www.linkedin.com/in/salvadorvillalon/'>
								By Salvador Villalon
							</a>
						</p>
					</div>
				</Toolbar>
			</AppBar>
		</footer>
	);
}

export default Footer;
