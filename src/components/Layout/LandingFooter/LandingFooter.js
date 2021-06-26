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
import { makeStyles } from '@material-ui/core/styles';

// Styling
import { NavigationToolbar } from '../../../styles/globalStyledComponents';

import {
	FooterLink,
	FooterContainer,
	FooterAnchor
} from './LandingFooterStyledComponents';
// -----------------------------------------------

const useStyles = makeStyles(theme => ({
	appBar: {
		'box-shadow': 'unset'
	}
}));

function LandingFooter() {
	const classes = useStyles();

	return (
		<FooterContainer>
			<AppBar position='static' className={classes.appBar}>
				<NavigationToolbar landingFooter={true}>
					<FooterLink>
						<FooterAnchor href='https://www.linkedin.com/in/salvadorvillalon/'>
							Made By Salvador Villalon
						</FooterAnchor>
					</FooterLink>
				</NavigationToolbar>
			</AppBar>
		</FooterContainer>
	);
}

export default LandingFooter;
