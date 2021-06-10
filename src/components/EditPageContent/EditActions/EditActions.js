// -----------------------------------------------
//
// EditPageContent -> EditActions.js
// Desc: Sub component to display actions user can
// take when editing a year
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Styling
import {
	GreenButton,
	RedButton,
	ButtonContainer
} from '../../../styles/globalStyledComponents';
import { ActionsContainer } from '../EditPageContentStyledComponents';
// -----------------------------------------------

function EditActions(props) {
	const { reflectionId } = props;

	return (
		<Grid item xs>
			<ActionsContainer>
				<ButtonContainer>
					<GreenButton
						onClick={() => props.handleModalOpen(reflectionId)}
					>
						Edit
					</GreenButton>

					<RedButton
						onClick={() => props.handleOnDelete(reflectionId)}
					>
						Delete
					</RedButton>
				</ButtonContainer>
			</ActionsContainer>
		</Grid>
	);
}

export default EditActions;
