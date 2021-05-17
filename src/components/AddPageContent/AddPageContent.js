// -----------------------------------------------
//
// AddPageContent -> AddPageContent.js
// Desc: Allow user to add to their story
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Styling
import {
	FormTextField,
	FormTextArea,
	FormContentContainer,
	FormLabel
} from '../../styles/globalStyledComponents';
// -----------------------------------------------

function AddPageContent() {
	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs>
					<DashboardButtonContainer>
						<DashboardButton>
							<Link to='/add'>Add To Your Story</Link>
						</DashboardButton>
					</DashboardButtonContainer>
				</Grid>

				<Grid item xs>
					<DashboardButtonContainer>
						<DashboardButton>
							<Link to='/edit'>Edit Your Story</Link>
						</DashboardButton>
					</DashboardButtonContainer>
				</Grid>
			</Grid>

			<Grid container spacing={3}>
				<Grid item xs>
					<DashboardButtonContainer>
						<DashboardButton>
							<Link to='/view'>View You Story</Link>
						</DashboardButton>
					</DashboardButtonContainer>
				</Grid>

				<Grid item xs>
					<DashboardButtonContainer>
						<DashboardButton>
							<Link to='/'>Share Your Story</Link>
						</DashboardButton>
					</DashboardButtonContainer>
				</Grid>
			</Grid>

			<Grid container spacing={3}>
				<Grid item xs>
					<Paper>xs</Paper>
				</Grid>
				<Grid item xs>
					<Paper>xs</Paper>
				</Grid>
				{/* <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid> */}
			</Grid>
		</>
	);
}

export default AddPageContent;
