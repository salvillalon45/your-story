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

// Styling
import {
	FooterLink,
	FooterContainer,
	FooterAnchor
} from '../FooterStyledComponents';
import {
	NavigationToolbar,
	NavigationAppBar
} from '../../../styles/globalStyledComponents';
// -----------------------------------------------

function Footer() {
	return (
		<FooterContainer>
			<NavigationAppBar
				landing={false}
				boxShadow={true}
				position='static'
			>
				<NavigationToolbar footer>
					<FooterLink landing={false}>
						<FooterAnchor
							landing={false}
							href='https://www.linkedin.com/in/salvadorvillalon/'
						>
							By Salvador Villalon
						</FooterAnchor>
					</FooterLink>

					<FooterLink landing={false}>
						<FooterAnchor
							landing={false}
							href='https://github.com/salvillalon45/your-story'
						>
							Code
						</FooterAnchor>
					</FooterLink>
				</NavigationToolbar>
			</NavigationAppBar>
		</FooterContainer>
	);
}

export default Footer;
