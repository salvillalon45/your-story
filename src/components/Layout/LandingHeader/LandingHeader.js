// -----------------------------------------------
//
// LandingHeader -> LandingHeader.js
// Desc: Landing Header for landing page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';

// Styling
import {
	HeaderLogo,
	HeaderToolbar,
	HeaderContainer
} from '../HeaderStyledComponents';
import { NavigationAppBar } from '../../../styles/globalStyledComponents';
// -----------------------------------------------

function LandingHeader() {
	return (
		<HeaderContainer>
			<NavigationAppBar landing={true} boxShadow={true} position='static'>
				<nav>
					<HeaderToolbar landing={true}>
						<HeaderLogo landing={true}>Your Story</HeaderLogo>
					</HeaderToolbar>
				</nav>
			</NavigationAppBar>
		</HeaderContainer>
	);
}

export default LandingHeader;
