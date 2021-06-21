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

const IntroPaper = styled(Paper)`
	width: 33%;
	margin: 0 auto;
	margin-top: 40px;
	text-align: center;

	&& {
		background-color: transparent;
		color: var(--white);
		border-bottom-color: var(--white);
		border-style: dotted;
		padding: 20px;
	}
`;

const IntroTitle = styled.h2`
	font-family: var(--rufina);
`;

const Line = styled(Divider)`
	&& {
		background-color: #f79e77;
		margin-top: 31px;
		margin-bottom: 39px;

		height: 5px;
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
	IntroPaper,
	IntroTitle,
	Line,
	FormTextArea,
	FormContentContainer,
	FormLabel
};
