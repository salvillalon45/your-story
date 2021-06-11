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

// Components
import StoryTimeline from './StoryTimeline';

// Material UI
import Grid from '@material-ui/core/Grid';

// React Context
import ThemeContext from '../../context/ThemeContext';

// Styling
import { ViewPageContentContainer } from './ViewPageContentStyledComponents';

// Util
import { pp } from '../../util/mainUtil';
// -----------------------------------------------

function ViewPageContent() {
	return (
		<ViewPageContentContainer>
			<StoryTimeline></StoryTimeline>
		</ViewPageContentContainer>
	);
}

export default ViewPageContent;
