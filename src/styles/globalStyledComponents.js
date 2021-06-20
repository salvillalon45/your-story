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

const GameButton = styled.button`
	background: var(--babyBlue);
	border: none;
	padding: 11px;
	border-radius: 10px;
	font-weight: bold;
	cursor: pointer;
	color: var(--darkBlue);
`;

const DashboardButtonContainer = styled.div`
	background-color: orange;
`;

const DashboardButton = styled(Button)`
	${'' /* && { */}
	${'' /* color: white;
	background-color: blue;
	height: 80px; */}
	${'' /* } */}
`;

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
	background-color: #f79e77;
	margin-top: 31px;
	margin-bottom: 39px;

	height: 5px;
`;

export {
	DashboardButtonContainer,
	DashboardButton,
	GreenButton,
	ButtonContainer,
	RedButton,
	NavigationToolbar,
	IntroPaper,
	IntroTitle,
	Line
};
