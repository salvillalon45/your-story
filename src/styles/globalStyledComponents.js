// -----------------------------------------------
//
// Global Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

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

const FormContentContainer = styled.div``;

const FormLabel = styled.p``;

const FormTextArea = styled(TextareaAutosize)``;

const FormTextField = styled(TextField)``;

export {
	FormTextField,
	FormTextArea,
	FormContentContainer,
	FormLabel,
	DashboardButtonContainer,
	DashboardButton
};
