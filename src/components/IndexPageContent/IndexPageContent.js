// -----------------------------------------------
//
// IndexPageContent -> IndexPageContent.js
// Desc: Landing Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// React Context
import ThemeContext from '../../context/ThemeContext';

// Gatsby
// import { Link } from 'gatsby';
import { navigate } from 'gatsby';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

// Components
import AuthModal from '../Reusable/AuthModal';

// Styling
import {
	ImageContainer,
	ButtonContainer
} from '../../styles/globalStyledComponents';
import {
	LandingText,
	LandingTitle,
	LandingButton,
	IndexPageContentContainer
} from './IndexPageContentStyledComponents';

// Images
import Landing from '../../images/landing.svg';

// Util
import { createNewUser, loginUser } from '../../util/firebaseUtil';
import { pp } from '../../util/mainUtil';
// -----------------------------------------------

const useStyles = makeStyles(theme => ({
	firstText: {
		marginTop: '45px'
	},
	container: {
		alignItems: 'center'
	},
	gridContainer: {
		flexDirection: 'column',
		textAlign: 'center'
	},
	landingButton: {
		textAlign: 'center'
	},
	loginButton: {
		marginLeft: '15px'
	}
}));

function IndexPageContent() {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width:426px)');
	const [isOpen, setIsOpen] = React.useState(false);
	const [authType, setAuthType] = React.useState('');
	const [loginErrorMessage, setLoginErrorMessage] = React.useState('');
	const [createErrorMessage, setCreateErrorMessage] = React.useState('');
	const contextValue = React.useContext(ThemeContext);

	function handleShowModal(type) {
		setAuthType(type);
		setIsOpen(!isOpen);
		setLoginErrorMessage('');
		setCreateErrorMessage('');
	}

	async function handleAuthSubmit(event, authData) {
		const { email, password } = authData;
		let errorFlag = false;
		event.preventDefault();

		if (authType === 'create') {
			const createResult = await createNewUser(email, password);
			console.log('Create Time');
			console.log({ createResult });

			if (createResult) {
				errorFlag = true;
				setCreateErrorMessage(createResult);
			}
		} else {
			const loginResult = await loginUser(email, password);
			console.log('Log Time');
			console.log({ loginResult });

			if (loginResult) {
				errorFlag = true;
				setLoginErrorMessage(loginResult);
			}
		}
		console.log('error flag');
		console.log({ errorFlag });
		if (errorFlag === false) {
			console.log('Dashboard time');
			handleShowModal();
			contextValue.handleIsLoggedIn(true);
			navigate('/dashboard');
		}
	}

	function whichErrorMessage() {
		if (loginErrorMessage) {
			return loginErrorMessage;
		} else {
			return createErrorMessage;
		}
	}

	function createActionButtonText() {
		if (authType === 'create') {
			return 'Sign Up!';
		}

		return 'Log In!';
	}

	return (
		<IndexPageContentContainer>
			{/* {contextValue.isLoggedIn && (
				<h1 style={{ color: 'white', fontSize: '4rem' }}>HOLA HERE</h1>
			)} */}
			{isOpen && (
				<AuthModal
					handleShowModal={handleShowModal}
					handleAuthSubmit={handleAuthSubmit}
					isOpen={isOpen}
					actionText={createActionButtonText()}
					cancelText={'Cancel'}
					errorMessage={whichErrorMessage()}
				/>
			)}

			<Grid
				container
				className={
					classes.container && matches && classes.gridContainer
				}
				id='gridContainer'
			>
				<Grid item xs>
					<LandingTitle>Your Story</LandingTitle>

					<LandingText className={classes.firstText}>
						Your Story gives you the tools you need to create yearly
						reflections and create a nice timeline to look back at
						all the tings you did!
					</LandingText>

					<LandingText>Create an account today!</LandingText>

					<ButtonContainer
						landing={true}
						className={matches && classes.landingButton}
					>
						<LandingButton
							onClick={() => handleShowModal('create')}
						>
							Create Account
						</LandingButton>

						<LandingButton
							onClick={() => handleShowModal('login')}
							className={classes.loginButton}
						>
							Login
						</LandingButton>
					</ButtonContainer>
				</Grid>

				<Grid item xs>
					<ImageContainer>
						<img src={Landing} alt='Person looking at timeline' />
					</ImageContainer>
				</Grid>
			</Grid>
		</IndexPageContentContainer>
	);
}

export default IndexPageContent;
