// -----------------------------------------------
//
// EditPageContent -> EditPageContent.js
// Desc: Allow user to edit their stories
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Styling
import {
	GreenButton,
	RedButton,
	ButtonContainer
} from '../../styles/globalStyledComponents';
import {
	YearContainer,
	YearTitle,
	ActionsContainer,
	EventsContainer
} from './EditPageContentStyledComponents';

// React Context
import ThemeContext from '../../context/ThemeContext';
// -----------------------------------------------

function EditPageContent(props) {
	const contextValue = React.useContext(ThemeContext);
	console.log();
	console.group('EDIT PAGE CONTENT');
	// if (contextValue.yearsData) {
	console.log(contextValue.yearsData);
	console.log(contextValue.yearsData);

	console.log('LINK STATE CHECK');
	console.log(props);
	console.log(props.yearsData);
	// }

	console.groupEnd('EDIT PAGE CONTENT');
	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs>
					<YearContainer>
						<YearTitle>In the year 2021...</YearTitle>
					</YearContainer>
				</Grid>

				<Grid item xs>
					<ActionsContainer>
						<ButtonContainer>
							<GreenButton>Edit</GreenButton>
							<RedButton>Delete</RedButton>
						</ButtonContainer>
					</ActionsContainer>
				</Grid>
			</Grid>

			<Grid container spacing={3}>
				<Grid item xs>
					<EventsContainer>
						<ul>
							<li>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</li>
							<li>
								Integer sit amet eros eu elit mattis tincidunt.
							</li>
							<li>
								Fusce vitae sapien et ante lacinia aliquam in
								eget risus.
							</li>
							<li>
								Integer venenatis felis tristique hendrerit
								hendrerit.
							</li>
							<li>
								Vestibulum ornare turpis in facilisis fermentum.
							</li>
						</ul>
					</EventsContainer>
				</Grid>
			</Grid>
		</>
	);
}

export default EditPageContent;
