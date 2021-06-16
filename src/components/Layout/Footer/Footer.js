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
// import Toolbar from '@material-ui/core/Toolbar';

// Styling
import { NavigationToolbar } from '../../../styles/globalStyledComponents';

import { FooterLink } from './FooterStyledComponents';
// -----------------------------------------------

function Footer() {
	return (
		<footer className='footerContainer'>
			<AppBar position='static'>
				<NavigationToolbar>
					<FooterLink>
						<a href='https://www.linkedin.com/in/salvadorvillalon/'>
							By Salvador Villalon
						</a>
					</FooterLink>

					<FooterLink>
						<a href='https://www.linkedin.com/in/salvadorvillalon/'>
							By Salvador Villalon
						</a>
					</FooterLink>
				</NavigationToolbar>
			</AppBar>
		</footer>
	);
}

export default Footer;
