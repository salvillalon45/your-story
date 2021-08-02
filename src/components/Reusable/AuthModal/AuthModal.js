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
import { makeStyles } from '@material-ui/core/styles';

// Styling
import {
	GreenButton,
	RedButton,
	ButtonContainer,
	FormContentContainer,
	ModalContentContainer,
	FormTextField
} from '../../../styles/globalStyledComponents';

import {
	AuthErrorMessage,
	AuthErrorContainer
} from './AuthModalStyledComponents';
// -----------------------------------------------
const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: 'var(--grey)',
		border: '2px solid var(--black)',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(5, 7, 3)
	},
	formTextFieldFirst: {
		marginBottom: '40px'
	},
	buttonContainer: {
		marginTop: '40px'
	},
	cancelButton: {
		marginLeft: '15px'
	},
	muiFormControlRoot: { display: 'block' }
}));

function AuthModal(props) {
	const { actionText, cancelText, isOpen, errorMessage } = props;
	const classes = useStyles();
	const [auth, setAuth] = React.useState({
		email: '',
		password: ''
	});

	function handleOnChange(event) {
		setAuth(prevValues => {
			return { ...prevValues, [event.target.name]: event.target.value };
		});
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
						<form
							onSubmit={event =>
								props.handleAuthSubmit(event, auth)
							}
						>
							<FormContentContainer>
								<ModalContentContainer>
									<FormTextField
										className={
											classes.muiFormControlRoot +
											' ' +
											classes.formTextFieldFirst
										}
										white={true}
										name='email'
										placeholder='Enter Email'
										value={auth.email}
										onChange={event => {
											handleOnChange(event);
										}}
									/>

									<FormTextField
										className={classes.muiFormControlRoot}
										white={true}
										name='password'
										type='password'
										placeholder='Enter Password'
										value={auth.password}
										onChange={event => {
											handleOnChange(event);
										}}
									/>

									<ButtonContainer
										className={classes.buttonContainer}
									>
										<GreenButton type='submit'>
											{actionText}
										</GreenButton>

										<RedButton
											className={classes.cancelButton}
											onClick={() =>
												props.handleShowModal()
											}
										>
											{cancelText}
										</RedButton>
									</ButtonContainer>

									<AuthErrorContainer>
										<AuthErrorMessage>
											{errorMessage}
										</AuthErrorMessage>
									</AuthErrorContainer>
								</ModalContentContainer>
							</FormContentContainer>
						</form>
					</Grid>
				</Grid>
			</Paper>
		</Modal>
	);
}

export default AuthModal;
