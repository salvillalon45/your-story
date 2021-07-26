// -----------------------------------------------
//
// Add Page Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

// const FormContentContainer = styled.div``;

// const FormLabel = styled.p`
// 	margin-top: 40px;
// 	margin-bottom: ${props => (props.year ? '15px' : '')};
// `;

// const FormTextArea = styled(TextareaAutosize)`
// 	width: 400px;
// 	background-color: transparent;
// 	color: white;
// `;

const FormTextField = styled(TextField)`
	&& {
		color: 'green';
		border-bottom-color: 'green';
	}
`;

const AddPageContentContainer = styled.div``;

const AddForm = styled.form`
	display: flex;
	color: white;
	justify-content: center;
`;

export {
	FormTextField,
	// FormTextArea,
	// FormContentContainer,
	// FormLabel,
	AddPageContentContainer,
	AddForm
};
