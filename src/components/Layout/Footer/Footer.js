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

import {
	FooterLink,
	FooterContainer,
	FooterAnchor
} from './FooterStyledComponents';
// -----------------------------------------------

function Footer() {
	return (
		<FooterContainer>
			<AppBar position='static'>
				<NavigationToolbar>
					<FooterLink>
						<FooterAnchor href='https://www.linkedin.com/in/salvadorvillalon/'>
							By Salvador Villalon
						</FooterAnchor>
					</FooterLink>

					<FooterLink>
						<FooterAnchor href='https://github.com/salvillalon45/your-story'>
							Code
						</FooterAnchor>
					</FooterLink>
				</NavigationToolbar>
			</AppBar>
		</FooterContainer>
	);
}

export default Footer;
