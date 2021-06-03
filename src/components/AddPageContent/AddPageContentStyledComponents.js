// -----------------------------------------------
//
// Add Page Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

const FormContentContainer = styled.div``;

const FormLabel = styled.p``;

const FormTextArea = styled(TextareaAutosize)``;

const FormTextField = styled(TextField)``;

export { FormTextField, FormTextArea, FormContentContainer, FormLabel };
