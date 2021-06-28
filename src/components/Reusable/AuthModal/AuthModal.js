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

// Gatsby
import { Link } from 'gatsby';

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
	DisabledButton,
	ButtonContainer,
	IntroContainer,
	IntroTitle,
	FormTextArea,
	FormContentContainer,
	FormLabel,
	IntroLine,
	ModalContentContainer
} from '../../../styles/globalStyledComponents';
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

function AuthModal(props) {
	const { actionText, cancelText, isOpen, whichButton } = props;
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
										name='email'
										placeholder='Enter Email'
										value={auth.email}
										onChange={event => {
											handleOnChange(event);
										}}
									/>

									<FormTextField
										className={classes.muiFormControlRoot}
										name='password'
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