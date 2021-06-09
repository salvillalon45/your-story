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

// Gatsby
import { Link } from 'gatsby';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Styling
import {
	DashboardButtonContainer,
	DashboardButton
} from '../../styles/globalStyledComponents';

// React Context
import ThemeContext from '../../context/ThemeContext';
// -----------------------------------------------

function DashboardPageContent() {
	const contextValue = React.useContext(ThemeContext);

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
							<Link
								to='/edit'
								state={{
									reflections: contextValue.reflections
								}}
							>
								Edit Your Story
							</Link>
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

export default DashboardPageContent;
