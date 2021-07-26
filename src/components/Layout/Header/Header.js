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

// Components
import Sidebar from '../Sidebar';

// Styling
import {
	HeaderLogo,
	HeaderToolbar,
	HeaderContainer
} from '../HeaderStyledComponents';
import { NavigationAppBar } from '../../../styles/globalStyledComponents';
// -----------------------------------------------

function Header() {
	return (
		<HeaderContainer>
			<NavigationAppBar
				landing={false}
				boxShadow={true}
				position='static'
			>
				<nav>
					<HeaderToolbar landing={false}>
						<HeaderLogo landing={false}>Your Story</HeaderLogo>

						<Sidebar />
					</HeaderToolbar>
				</nav>
			</NavigationAppBar>
		</HeaderContainer>
	);
}

export default Header;
