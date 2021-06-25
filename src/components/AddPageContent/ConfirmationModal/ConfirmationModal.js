// -----------------------------------------------
//
// ConfirmationModal -> ConfirmationModal.js
// Desc: Shows users that the action was a success
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
	ButtonContainer
} from '../../../styles/globalStyledComponents';
import { ModalContentContainer } from './ConfirmationModalStyledComponents';
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
		padding: theme.spacing(2, 4, 0)
	}
}));

function ConfirmationModal(props) {
	const { text1, text2, buttonText, isOpen, whichButton } = props;
	const classes = useStyles();

	function showActionButton() {
		if (whichButton === 'green') {
			return <GreenButton type='submit'>{buttonText}</GreenButton>;
		} else {
			return (
				<RedButton onClick={() => props.handleModalClose()}>
					{buttonText}
				</RedButton>
			);
		}
	}

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
						<ModalContentContainer>
							<p>{text1}</p>

							<p>{text2}</p>

							<ButtonContainer>
								{showActionButton()}
							</ButtonContainer>
						</ModalContentContainer>
					</Grid>
				</Grid>
			</Paper>
		</Modal>
	);
}

export default ConfirmationModal;
