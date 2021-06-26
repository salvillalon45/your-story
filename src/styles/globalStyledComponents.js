// -----------------------------------------------
//
// Global Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const ButtonContainer = styled.div`
	text-align: ${props => (props.landing ? 'left' : 'center')};
	margin-top: 20px;
	margin-bottom: 20px;
`;

const GreenButton = styled(Button)`
	&& {
		color: var(--white);
		font-family: var(--source);
		background-color: green;

		&:hover {
			color: green;
		}
	}
`;

const RedButton = styled(Button)`
	&& {
		color: var(--white);
		font-family: var(--source);
		background-color: red;

		&:hover {
			color: red;
		}
	}
`;

const DisabledButton = styled(Button)`
	&& {
		color: var(--white);
		font-family: var(--source);
		background-color: grey;
	}
`;

const NavigationToolbar = styled(Toolbar)`
	background-color: ${props => {
		if (props.footer) {
			return 'var(--grey)';
		} else if (props.landingFooter) {
			return 'transparent';
		} else {
			return 'var(--white)';
		}
	}};
	align-content: center;
	justify-content: ${props => {
		if (props.footer) {
			return 'space-between';
		} else if (props.landingFooter) {
			return 'flex-end';
		}
	}};
	padding-top: 19px;

	&& {
		align-items: baseline;
	}
`;

const IntroContainer = styled.div`
	margin-top: 40px;
	text-align: center;
	color: var(--white);
`;

const IntroTitle = styled.h2`
	font-family: var(--rufina);
`;

const Line = styled(Divider)`
	&& {
		background-color: var(--orange);
		margin-top: 31px;
		margin-bottom: 39px;
		height: 5px;
	}
`;

const IntroLine = styled(Divider)`
	&& {
		width: 50%;
		margin: 0 auto;
		margin-top: 18px;
		height: 5px;
		background-color: var(--orange);

		margin-top: ${props => (props.edit ? '-9px' : '')};
		margin-bottom: ${props => (props.edit ? '20px' : '')};
	}
`;

const FormContentContainer = styled.div``;

const FormLabel = styled.p`
	margin-top: 40px;
	margin-bottom: ${props => (props.year ? '15px' : '')};
`;

const FormTextArea = styled(TextareaAutosize)`
	width: 400px;
	background-color: transparent;
	overflow: scroll !important;

	&& {
		height: ${props => (props.modal ? 'auto' : '')};
		color: ${props => (props.modal ? 'var(--black)' : 'var(--white)')};
	}
`;

// const FormTextField = styled(TextField)`
// 	&& {
// 		color: 'green';
// 		border-bottom-color: 'green';
// 	}
// `;

const ImageContainer = styled.div`
	@media only screen and (max-width: 426px) {
		width: 50%;
		margin: 0 auto;
		padding-top: 28px;
	}
`;

export {
	GreenButton,
	ButtonContainer,
	RedButton,
	NavigationToolbar,
	IntroContainer,
	IntroTitle,
	Line,
	FormTextArea,
	FormContentContainer,
	FormLabel,
	IntroLine,
	DisabledButton,
	ImageContainer
};
