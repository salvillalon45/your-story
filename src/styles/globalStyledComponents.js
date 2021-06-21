// -----------------------------------------------
//
// Global Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const ButtonContainer = styled.div`
	text-align: center;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const GreenButton = styled(Button)`
	&& {
		color: var(--white);
		font-family: var(--source);
		background-color: green;
	}
`;

const RedButton = styled(Button)`
	&& {
		color: var(--white);
		font-family: var(--source);
		background-color: red;
	}
`;

const NavigationToolbar = styled(Toolbar)`
	${'' /* background-color: var(--white); */}
	background-color: ${props =>
		props.footer ? 'var(--grey)' : 'var(--white)'};
	align-content: center;
	justify-content: space-between;
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

	width: ${props => (props.intro ? '50%' : 'revert')};
	margin: ${props => (props.intro ? '0 auto' : 'revert')}
    margin-top: ${props => (props.intro ? '18px' : 'revert')}
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
	color: white;
`;

// const FormTextField = styled(TextField)`
// 	&& {
// 		color: 'green';
// 		border-bottom-color: 'green';
// 	}
// `;

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
	FormLabel
};
