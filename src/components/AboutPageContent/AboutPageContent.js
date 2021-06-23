// -----------------------------------------------
//
// AboutPageContent -> AboutPageContent.js
// Desc: Allows the user to learn about the app!
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Styling
import {
	IntroContainer,
	IntroTitle,
	IntroLine,
	Line
} from '../../styles/globalStyledComponents';
import { AboutPageContentContainer } from './AboutPageContentStyledComponents';
// -----------------------------------------------

const useStyles = makeStyles(theme => ({
	modal: {
		alignItems: 'flex-end'
	}
}));

function AboutPageContent() {
	return (
		<AboutPageContentContainer>
			<Grid container>
				<Grid item xs>
					<IntroContainer>
						<IntroTitle>About Your Story</IntroTitle>
						<p>
							Hello 👋! My name is Salvador Villalon Jr. and I am
							the creator of <b>Your Story</b>
						</p>

						<IntroLine />

						<p>
							One of the most important things that I learned is
							the power of reflection
						</p>
						<p>
							By reflecting I can see everything I have done and
							be proud of myself!
						</p>
						<p>At the same time it helps me </p>
					</IntroContainer>
				</Grid>
			</Grid>
		</AboutPageContentContainer>
	);
}

export default AboutPageContent;
