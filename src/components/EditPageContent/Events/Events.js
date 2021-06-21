// -----------------------------------------------
//
// EditPageContent -> Events.js
// Desc: Sub component to display events that took
// place that year
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Styling
import {
	EventsContainer,
	EventsText
} from '../EditPageContentStyledComponents';
// -----------------------------------------------

function Events(props) {
	const { events } = props;

	return (
		<Grid item xs>
			<EventsContainer>
				<EventsText>{events}</EventsText>
			</EventsContainer>
		</Grid>
	);
}

export default Events;
