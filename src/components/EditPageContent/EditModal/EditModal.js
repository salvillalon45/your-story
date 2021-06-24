// -----------------------------------------------
//
// EditPageContent -> EditModal.js
// Desc: Allows user to edit the field
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

// Styling
import {
	GreenButton,
	RedButton,
	ButtonContainer,
	FormTextArea,
	FormContentContainer,
	FormLabel
} from '../../../styles/globalStyledComponents';
// -----------------------------------------------

const FormTextField = withStyles({
	root: {
		'& .MuiInputBase-root': {
			color: 'var(--black)',
			fontFamily: 'var(--source)'
		},
		'& label.Mui-focused': {
			color: 'var(--black)'
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'var(--black)'
		},
		'& .MuiInput-underline:before': {
			borderBottomColor: 'var(--black)'
		}
	}
})(TextField);

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

function EditModal(props) {
	const { year, events, isOpen } = props;
	const classes = useStyles();

	return (
		<Modal
			open={isOpen}
			className={classes.modal}
			aria-labelledby='simple-modal-title'
			aria-describedby='simple-modal-description'
		>
			<Paper className={classes.paper}>
				<Grid container spacing={3}>
					<Grid item xs>
						<form onSubmit={event => props.handleEditSubmit(event)}>
							<FormContentContainer>
								<FormLabel>Edit Year</FormLabel>

								<FormTextField
									name='year'
									defaultValue={year}
									onChange={event => {
										props.handleEditChange(event);
									}}
								/>

								<FormLabel>Edit Events</FormLabel>

								<FormTextArea
									name='events'
									defaultValue={events}
									modal={true}
									rowsMin={4}
									onChange={event => {
										props.handleEditChange(event);
									}}
								/>

								<ButtonContainer>
									<GreenButton type='submit'>
										Submit
									</GreenButton>

									<RedButton
										onClick={() => props.handleModalClose()}
									>
										Close
									</RedButton>
								</ButtonContainer>
							</FormContentContainer>
						</form>
					</Grid>
				</Grid>
			</Paper>
		</Modal>
	);
}

export default EditModal;
