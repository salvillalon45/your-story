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

// Material UI
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
	fade,
	ThemeProvider,
	withStyles,
	makeStyles,
	createMuiTheme
} from '@material-ui/core/styles';

// Styling
import {
	GreenButton,
	ButtonContainer,
	IntroPaper,
	IntroTitle
} from '../../styles/globalStyledComponents';
import {
	// FormTextField,
	FormTextArea,
	FormContentContainer,
	FormLabel,
	AddPageContentContainer,
	AddForm
} from './AddPageContentStyledComponents';

// Util
import { insertNewReflection } from '../../util/firebaseUtil';
// -----------------------------------------------

const FormTextField = withStyles({
	root: {
		'& .MuiInputBase-root': {
			color: 'white',
			fontFamily: 'var(--source)'
		},
		'& label.Mui-focused': {
			color: 'white'
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'white'
		},
		'& .MuiInput-underline:before': {
			borderBottomColor: 'white'
		}
	}
})(TextField);

function AddPageContent() {
	const [reflection, setReflection] = React.useState({
		year: '',
		events: ''
	});

	function handleOnChange(event) {
		setReflection(prevValues => {
			return { ...prevValues, [event.target.name]: event.target.value };
		});
	}

	function handleOnSubmit(event) {
		event.preventDefault();
		insertNewReflection(reflection, 1);
	}

	return (
		<AddPageContentContainer>
			<Grid container>
				<Grid item xs>
					<IntroPaper>
						<IntroTitle>Add To Your Story</IntroTitle>
						<p>
							Add the year and the events that happened in that
							year.
						</p>
						<p className='lastSentence'>
							Write as much as you like!
						</p>
					</IntroPaper>
				</Grid>
			</Grid>

			<Grid container>
				<Grid item xs>
					<AddForm onSubmit={event => handleOnSubmit(event)}>
						<FormContentContainer>
							<FormLabel year>Year</FormLabel>

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
								rowsMin={4}
							/>

							<ButtonContainer>
								<GreenButton type='submit'>Submit</GreenButton>
							</ButtonContainer>
						</FormContentContainer>
					</AddForm>
				</Grid>
			</Grid>
		</AddPageContentContainer>
	);
}

export default AddPageContent;
