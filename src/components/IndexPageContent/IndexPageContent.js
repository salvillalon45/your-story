// -----------------------------------------------
//
// IndexPageContent -> IndexPageContent.js
// Desc: Landing Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// React Context
import ThemeContext from '../../context/ThemeContext';

// Gatsby
import { Link } from 'gatsby';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

// Styling
import {
	ImageContainer,
	ButtonContainer
} from '../../styles/globalStyledComponents';
import {
	LandingText,
	LandingTitle,
	LandingButton,
	IndexPageContentContainer
} from './IndexPageContentStyledComponents';

// Images
import Landing from '../../images/landing.svg';
// -----------------------------------------------

const useStyles = makeStyles(theme => ({
	firstText: {
		marginTop: '45px'
	},
	container: {
		alignItems: 'center'
	},
	gridContainer: {
		flexDirection: 'column',
		textAlign: 'center'
	},
	landingButton: {
		textAlign: 'center'
	}
}));

function IndexPageContent() {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width:426px)');

	return (
		<IndexPageContentContainer>
			<Grid
				container
				className={
					classes.container && matches && classes.gridContainer
				}
				id='gridContainer'
			>
				<Grid item xs>
					<LandingTitle>Your Story</LandingTitle>

					<LandingText className={classes.firstText}>
						Your Story gives you the tools you need to create yearly
						reflections and create a nice timeline to look back at
						all the tings you did!
					</LandingText>

					<LandingText>
						Create an account today! Need a quick run through? Click
						on Demo Run.
					</LandingText>

					<ButtonContainer
						landing={true}
						className={matches && classes.landingButton}
						id='landingButtonContainer'
					>
						<LandingButton>Create Account</LandingButton>
					</ButtonContainer>
				</Grid>

				<Grid item xs>
					<ImageContainer>
						<img src={Landing} />
					</ImageContainer>
				</Grid>
			</Grid>
		</IndexPageContentContainer>
	);
}

export default IndexPageContent;
