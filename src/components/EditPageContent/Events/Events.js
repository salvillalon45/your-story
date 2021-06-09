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
import { EventsContainer } from '../EditPageContentStyledComponents';
// -----------------------------------------------

function Events(props) {
	const { events } = props;

	return (
		<Grid item xs>
			<EventsContainer>
				{events}
				{/* <ul>
					<li>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</li>
					<li>Integer sit amet eros eu elit mattis tincidunt.</li>
					<li>
						Fusce vitae sapien et ante lacinia aliquam in eget
						risus.
					</li>
					<li>
						Integer venenatis felis tristique hendrerit hendrerit.
					</li>
					<li>Vestibulum ornare turpis in facilisis fermentum.</li>
				</ul> */}
			</EventsContainer>
		</Grid>
	);
}

export default Events;
