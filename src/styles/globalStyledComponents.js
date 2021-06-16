// -----------------------------------------------
//
// Global Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

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

const ButtonContainer = styled.div``;

const GreenButton = styled(Button)``;

const RedButton = styled(Button)``;

const NavigationToolbar = styled(Toolbar)`
	background-color: var(--white);
	align-content: center;
	justify-content: space-between;
	padding-top: 19px;

	&& {
		align-items: baseline;
	}
`;

export {
	DashboardButtonContainer,
	DashboardButton,
	GreenButton,
	ButtonContainer,
	RedButton,
	NavigationToolbar
};
