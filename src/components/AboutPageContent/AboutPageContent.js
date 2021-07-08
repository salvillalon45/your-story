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

// React Context
import ThemeContext from '../../context/ThemeContext';

// Firebase
import firebase from 'gatsby-plugin-firebase';

// Gatsby
import { navigate } from 'gatsby';

// Material UI
import Grid from '@material-ui/core/Grid';

// Styling
import {
	IntroContainer,
	IntroTitle,
	IntroLine
} from '../../styles/globalStyledComponents';
import {
	AboutPageContentContainer,
	AboutTextContainer
} from './AboutPageContentStyledComponents';

// Util
import { authStateListener } from '../../util/firebaseUtil';
// -----------------------------------------------

function AboutPageContent() {
	const contextValue = React.useContext(ThemeContext);

	// console.log('Inside AboutPageContainer() cp');
	// React.useEffect(() => {
	// 	console.log('Inside Use Effect in AboutPageContent');
	// 	console.log('Going to call authStateListeners');
	// });

	function test() {
		console.log('What is contextValue.isLoggedIn');
		console.log(contextValue.isLoggedIn);

		if (contextValue.isLoggedIn === false) {
			navigate('/');
			return null;
		} else {
			return (
				<>
					<Grid container>
						<Grid item xs>
							<IntroContainer>
								<IntroTitle>About Your Story</IntroTitle>
								<p>Hello 👋!</p>
								<p>
									My name is Salvador Villalon Jr. and I am
									the creator of <b>Your Story</b>
								</p>
							</IntroContainer>

							<IntroLine />
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs>
							<AboutTextContainer>
								<p>
									One of the most important things that I
									learned is the power of reflection
								</p>
								<p>
									By reflecting I can see everything I have
									done and be proud of myself!
								</p>
								<p>
									At the same time it helps me see what are my
									next steps and see where to invest my time
									in{' '}
								</p>
								<p>
									I started doing this in college and
									reflecting helped me out so much! It serve
									as a guide to know what to do in college! I
									created this app so that others can see the
									power of reflection and help them on their
									journeys
								</p>
								<p>
									Here a reflection consists of the year and
									the events that happened that year. You will
									be able to add reflections and view them in
									a nice timeline to see what your life has
									looked like. You can make edits to your
									reflections as well.
								</p>
								<p>
									Hope you enjoy the app. Let me know if you
									have any questions or comments
								</p>
								<p>
									Sincerely, <br />
									Salvador Villalon
								</p>
							</AboutTextContainer>
						</Grid>
					</Grid>
				</>
			);
		}
	}

	return (
		<AboutPageContentContainer>
			{console.log('What is contextValue.isLoggedIn outside')}
			{console.log(contextValue.isLoggedIn)}
			{console.group('CUrrent User')}
			{console.log(firebase.auth().currentUser)}
			{console.groupEnd('CUrrent User')}

			{test()}
			{/* <Grid container>
				<Grid item xs>
					<IntroContainer>
						<IntroTitle>About Your Story</IntroTitle>
						<p>Hello 👋!</p>
						<p>
							My name is Salvador Villalon Jr. and I am the
							creator of <b>Your Story</b>
						</p>
					</IntroContainer>

					<IntroLine />
				</Grid>
			</Grid>

			<Grid container>
				<Grid item xs>
					<AboutTextContainer>
						<p>
							One of the most important things that I learned is
							the power of reflection
						</p>
						<p>
							By reflecting I can see everything I have done and
							be proud of myself!
						</p>
						<p>
							At the same time it helps me see what are my next
							steps and see where to invest my time in{' '}
						</p>
						<p>
							I started doing this in college and reflecting
							helped me out so much! It serve as a guide to know
							what to do in college! I created this app so that
							others can see the power of reflection and help them
							on their journeys
						</p>
						<p>
							Here a reflection consists of the year and the
							events that happened that year. You will be able to
							add reflections and view them in a nice timeline to
							see what your life has looked like. You can make
							edits to your reflections as well.
						</p>
						<p>
							Hope you enjoy the app. Let me know if you have any
							questions or comments
						</p>
						<p>
							Sincerely, <br />
							Salvador Villalon
						</p>
					</AboutTextContainer>
				</Grid>
			</Grid> */}
		</AboutPageContentContainer>
	);
}

export default AboutPageContent;
