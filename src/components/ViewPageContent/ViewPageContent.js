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

// Styling
import { ViewPageContentContainer } from './ViewPageContentStyledComponents';
// -----------------------------------------------

function ViewPageContent() {
	return (
		<ViewPageContentContainer>
			<StoryTimeline></StoryTimeline>
		</ViewPageContentContainer>
	);
}

export default ViewPageContent;
