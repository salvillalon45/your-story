// -----------------------------------------------
//
// DashboardPageContent -> DashboardPageContent.js
// Desc: Main Navigation for use
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// React Context
import ThemeContext from '../../context/ThemeContext';

// Gatsby
import { Link } from 'gatsby';

// Material UI
import Grid from '@material-ui/core/Grid';

// Styling
import {
	DashboardButtonContainer,
	DashboardButton
} from '../../styles/globalStyledComponents';

import {
	DashboardContentContainer,
	DashboardPaper
} from './DashboardStyledComponents';
// -----------------------------------------------

function DashboardPageContent() {
	const contextValue = React.useContext(ThemeContext);

	return (
		<DashboardContentContainer>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Link to='/add'>
						<DashboardPaper>Add To Story</DashboardPaper>
					</Link>
				</Grid>

				<Grid item xs={6}>
					<DashboardPaper>
						<Link
							to='/edit'
							state={{
								reflections: contextValue.reflections
							}}
						>
							Edit Your Story
						</Link>
					</DashboardPaper>
				</Grid>
			</Grid>

			<Grid container spacing={3}>
				<Grid item xs={6}>
					<DashboardPaper>
						<Link to='/view'>View You Story</Link>
					</DashboardPaper>
				</Grid>

				<Grid item xs={6}>
					<DashboardPaper>
						<Link to='/share'>Share Your Story</Link>
					</DashboardPaper>
				</Grid>
			</Grid>
		</DashboardContentContainer>
	);
}

export default DashboardPageContent;
