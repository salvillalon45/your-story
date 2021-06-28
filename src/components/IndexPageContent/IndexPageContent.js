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
import { createNewUser } from '../../util/firebaseUtil';
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

	function handleShowModal(type) {
		setAuthType(type);
		setIsOpen(!isOpen);
	}

	function handleAuthSubmit(event, authData) {
		const { email, password } = authData;
		event.preventDefault();
		if (authType === 'create') {
			createNewUser(email, password);
		} else {
		}

		handleShowModal();
		navigate('/dashboard');
	}

	function createActionButtonText() {
		if (authType === 'create') {
			return 'Sign Up!';
		}

		return 'Log In!';
	}

	return (
		<IndexPageContentContainer>
			{isOpen && (
				<AuthModal
					handleShowModal={handleShowModal}
					handleAuthSubmit={handleAuthSubmit}
					isOpen={isOpen}
					actionText={createActionButtonText()}
					cancelText={'Cancel'}
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

					<LandingText>
						Create an account today! Need a quick run through? Click
						on Demo Run.
					</LandingText>

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
						<img src={Landing} />
					</ImageContainer>
				</Grid>
			</Grid>
		</IndexPageContentContainer>
	);
}

export default IndexPageContent;
