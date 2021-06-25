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

// React Context
import ThemeContext from '../../context/ThemeContext';

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

// Components
import ConfirmationModal from './ConfirmationModal';

// Styling
import {
	GreenButton,
	ButtonContainer,
	IntroContainer,
	IntroTitle,
	FormTextArea,
	FormContentContainer,
	FormLabel,
	IntroLine
} from '../../styles/globalStyledComponents';
import {
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
	const [isOpen, setIsOpen] = React.useState(false);
	const [reflection, setReflection] = React.useState({
		year: '',
		events: ''
	});
	const contextValue = React.useContext(ThemeContext);

	function handleModalClose() {
		setIsOpen(!isOpen);
	}

	function handleOnChange(event) {
		setReflection(prevValues => {
			return { ...prevValues, [event.target.name]: event.target.value };
		});
	}

	function handleOnSubmit(event) {
		event.preventDefault();
		setIsOpen(!isOpen);
		insertNewReflection(reflection, 1);
		contextValue.handleIsChanged();
	}

	return (
		<AddPageContentContainer>
			{isOpen && (
				<ConfirmationModal
					handleModalClose={handleModalClose}
					isOpen={isOpen}
					text1={'Reflection Successfully Created'}
					whichButton={'red'}
					buttonText={'Close'}
				/>
			)}

			<Grid container>
				<Grid item xs>
					<IntroContainer>
						<IntroTitle>Add To Your Story</IntroTitle>
						<p>
							Add a reflection by adding a year and the events
							that happened
						</p>
						<p className='lastSentence'>
							Write as much as you like!
						</p>
					</IntroContainer>
				</Grid>
			</Grid>

			<IntroLine />

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
