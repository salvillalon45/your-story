// -----------------------------------------------
//
// AddPageContent -> AddPageContent.js
// Desc: Allow user to add to their story
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
	ButtonContainer
} from '../../styles/globalStyledComponents';
import {
	FormTextField,
	FormTextArea,
	FormContentContainer,
	FormLabel
} from './AddPageContentStyledComponents';

// Util
import { pushToDatabase } from '../../util/firebaseUtil';
// -----------------------------------------------

function AddPageContent() {
	const [yearsData, setYearsData] = React.useState({
		year: '',
		events: ''
	});

	function handleOnChange(event) {
		setYearsData(prevValues => {
			return { ...prevValues, [event.target.name]: event.target.value };
		});
	}

	function handleOnSubmit(event) {
		event.preventDefault();
		pushToDatabase(yearsData, 1);
	}

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs>
					<form onSubmit={event => handleOnSubmit(event)}>
						<FormContentContainer>
							<FormLabel>Year</FormLabel>

							<FormTextField
								name='year'
								onChange={event => {
									handleOnChange(event);
								}}
							/>

							<FormLabel>What Happened This Year?</FormLabel>

							<FormTextArea
								name='events'
								onChange={event => {
									handleOnChange(event);
								}}
							/>

							<ButtonContainer>
								<GreenButton type='submit'>Submit</GreenButton>
							</ButtonContainer>
						</FormContentContainer>
					</form>
				</Grid>
			</Grid>
		</>
	);
}

export default AddPageContent;
