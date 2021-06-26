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

// Material UI
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

// Styling
import { HeaderLogo, HeaderToolbar } from './LandingHeaderStyledComponents';
// -----------------------------------------------
const useStyles = makeStyles(theme => ({
	appBar: {
		'box-shadow': 'unset'
	}
}));

function LandingHeader() {
	const classes = useStyles();

	return (
		<header>
			<nav>
				<AppBar className={classes.appBar} position='static'>
					<HeaderToolbar>
						<HeaderLogo>Your Story</HeaderLogo>
					</HeaderToolbar>
				</AppBar>
			</nav>
		</header>
	);
}

export default LandingHeader;
