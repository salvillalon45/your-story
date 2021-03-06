// -----------------------------------------------
//
// EditModal -> EditModal.js
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
import { makeStyles } from '@material-ui/core/styles';

// Styling
import {
	GreenButton,
	RedButton,
	ButtonContainer,
	FormTextArea,
	FormContentContainer,
	FormLabel,
	FormTextField
} from '../../../styles/globalStyledComponents';
// -----------------------------------------------

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
	},
	separateButtons: {
		'margin-left': '15px'
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
									white={false}
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
									style={{ height: 'unset' }}
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
										className={classes.separateButtons}
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
