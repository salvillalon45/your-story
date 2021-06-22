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
} from './FooterStyledComponents';
// -----------------------------------------------

const useStyles = makeStyles(theme => ({
	appBar: {
		'box-shadow': 'unset'
	}
}));

function Footer() {
	const classes = useStyles();

	return (
		<FooterContainer>
			<AppBar position='static' className={classes.appBar}>
				<NavigationToolbar footer>
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
