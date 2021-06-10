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

// Components
import EditYear from './EditYear';
import Events from './Events';
import EditActions from './EditActions';
import EditModal from './EditModal';

// Material UI
import Grid from '@material-ui/core/Grid';

// React Context
import ThemeContext from '../../context/ThemeContext';

// Util
import { deleteFromDatabase } from '../../util/firebaseUtil';
import { pp } from '../../util/mainUtil';
// -----------------------------------------------

function EditPageContent(props) {
	const [isOpen, setIsOpen] = React.useState(false);

	const contextValue = React.useContext(ThemeContext);

	function handleModalOpen() {
		setIsOpen(!isOpen);
	}

	function handleModalClose() {
		setIsOpen(!isOpen);
	}

	function handleEditChange() {
		// setReflection(prevValues => {
		// 	return { ...prevValues, [event.target.name]: event.target.value };
		// });
	}

	function handleEditSubmit(event) {
		event.preventDefault();
		// pushToDatabase(reflection, 1);
	}

	async function handleOnDelete(reflectionId) {
		const userId = 1;
		await deleteFromDatabase(userId, reflectionId);
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
						<>
							<Grid container spacing={3}>
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
						</>
					);
				}
			);
		}
	}

	return (
		<div className='editPageContentContainer'>
			{isOpen && (
				<EditModal
					handleModalClose={handleModalClose}
					// handleEditSubmit={handleEditSubmit}
					// handleEditChange={handleEditChange}
					isOpen={isOpen}
				/>
			)}
			{createEditPageContent()}
		</div>
	);
}

export default EditPageContent;
