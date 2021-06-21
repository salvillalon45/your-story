// -----------------------------------------------
//
// EditPageContent -> EditPageContent.js
// Desc: Allow user to edit their stories
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// React Context
import ThemeContext from '../../context/ThemeContext';

// Util
import { deleteReflection, updateReflection } from '../../util/firebaseUtil';

// Styling
import {
	Line,
	IntroContainer,
	IntroTitle
} from '../../styles/globalStyledComponents';
import {
	EditPageContentContainer,
	EditReflectionContainer
} from './EditPageContentStyledComponents';

// Components
import EditYear from './EditYear';
import Events from './Events';
import EditActions from './EditActions';
import EditModal from './EditModal';
// -----------------------------------------------

const useStyles = makeStyles(theme => ({
	modal: {
		alignItems: 'flex-end'
	}
}));

function EditPageContent() {
	const [isOpen, setIsOpen] = React.useState(false);
	const [currentReflection, setCurrentReflection] = React.useState({
		year: '',
		events: '',
		reflectionId: ''
	});
	const contextValue = React.useContext(ThemeContext);
	const classes = useStyles();

	function handleModalOpen(reflectionId) {
		setIsOpen(!isOpen);
		const reflection = contextValue.reflections[reflectionId];

		setCurrentReflection(prevValues => {
			return {
				...prevValues,
				year: reflection.year,
				events: reflection.events,
				reflectionId: reflectionId
			};
		});
	}

	function handleModalClose() {
		setIsOpen(!isOpen);
	}

	function handleEditChange(event) {
		setCurrentReflection(prevValues => {
			return { ...prevValues, [event.target.name]: event.target.value };
		});
	}

	function handleEditSubmit(event) {
		event.preventDefault();
		updateReflection(currentReflection.reflectionId, 1, currentReflection);
		contextValue.handleIsChanged();
		handleModalClose();
	}

	async function handleOnDelete(reflectionId) {
		const userId = 1;
		await deleteReflection(userId, reflectionId);
		contextValue.handleIsChanged();
	}

	function createEditPageContent() {
		if (!contextValue.reflections) {
			return null;
		} else {
			return Object.entries(contextValue.reflections).map(
				reflectionArray => {
					const events = reflectionArray[1].events;
					const year = reflectionArray[1].year;
					const reflectionId = reflectionArray[0];

					return (
						<EditReflectionContainer>
							{/* <Paper> */}
							<Grid
								container
								spacing={3}
								className={classes.modal}
							>
								<EditYear year={year} />

								<EditActions
									reflectionId={reflectionId}
									handleOnDelete={handleOnDelete}
									handleModalOpen={handleModalOpen}
								/>
							</Grid>

							<Grid container spacing={3}>
								<Events events={events} />
							</Grid>
							{/* </Paper> */}

							<Line />
						</EditReflectionContainer>
					);
				}
			);
		}
	}

	return (
		<EditPageContentContainer>
			{isOpen && (
				<EditModal
					handleModalClose={handleModalClose}
					handleEditSubmit={handleEditSubmit}
					handleEditChange={handleEditChange}
					isOpen={isOpen}
					events={currentReflection.events}
					year={currentReflection.year}
				/>
			)}

			<Grid container>
				<Grid item xs>
					<IntroContainer>
						<IntroTitle>Edit Your Story</IntroTitle>
						<p>Edit or delete a reflection!</p>
					</IntroContainer>
				</Grid>
			</Grid>

			<Line intro={true} />

			{createEditPageContent()}
		</EditPageContentContainer>
	);
}

export default EditPageContent;
