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

function LandingFooter() {
	return (
		<FooterContainer>
			<NavigationAppBar landing={true} boxShadow={true} position='static'>
				<NavigationToolbar landingFooter={true}>
					<FooterLink landing={true}>
						<FooterAnchor
							landing={true}
							href='https://www.linkedin.com/in/salvadorvillalon/'
						>
							Made By Salvador Villalon
						</FooterAnchor>
					</FooterLink>
				</NavigationToolbar>
			</NavigationAppBar>
		</FooterContainer>
	);
}

export default LandingFooter;
