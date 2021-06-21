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
import { makeStyles } from '@material-ui/core/styles';

// Styling
import {
	GreenButton,
	RedButton,
	ButtonContainer
} from '../../../styles/globalStyledComponents';
import { ActionsContainer } from '../EditPageContentStyledComponents';
// -----------------------------------------------

const useStyles = makeStyles(theme => ({
	separateButtons: {
		'margin-left': '15px'
	}
}));

function EditActions(props) {
	const { reflectionId } = props;
	const classes = useStyles();

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
						className={classes.separateButtons}
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
