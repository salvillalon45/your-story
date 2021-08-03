// -----------------------------------------------
//
// ViewPageContent -> ViewPageContent.js
// Desc: Allow user to view their story in a vertical
// timeline
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Components
import StoryTimeline from './StoryTimeline';

// Styling
import { ViewPageContentContainer } from './ViewPageContentStyledComponents';
import {
	IntroContainer,
	IntroTitle,
	IntroLine
} from '../../styles/globalStyledComponents';
// -----------------------------------------------

function ViewPageContent() {
	return (
		<ViewPageContentContainer>
			<Grid container>
				<Grid item xs>
					<IntroContainer>
						<IntroTitle>View Your Story</IntroTitle>
						<p>Take a look at your past events in your life!</p>
						<p>
							See all the things you have done. Then feel free to
							print this out and share with others!
						</p>
						<p>
							<b>Be Proud</b> of how far you have come 😊
						</p>
					</IntroContainer>
				</Grid>
			</Grid>

			<IntroLine edit={true} />

			<StoryTimeline />
		</ViewPageContentContainer>
	);
}

export default ViewPageContent;
