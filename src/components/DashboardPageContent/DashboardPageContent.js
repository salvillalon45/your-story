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
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Styling
import {
	IntroContainer,
	IntroTitle,
	IntroLine
} from '../../styles/globalStyledComponents';

import {
	DashboardPageContentContainer,
	DashboardPaper,
	DashboardLink
} from './DashboardStyledComponents';
// -----------------------------------------------

const useStyles = makeStyles(theme => ({
	leftBoxes: {
		marginRight: '20px'
	}
}));

function DashboardPageContent() {
	const contextValue = React.useContext(ThemeContext);
	console.log('Inside DashboardPageContent() cp');
	React.useEffect(() => {
		console.log('Inside Use Effect in DashboardPageContent');
	});

	return (
		<DashboardPageContentContainer>
			<Grid container>
				<Grid item xs>
					<IntroContainer>
						<IntroTitle>Welcome To Your Story</IntroTitle>
						<p>
							Use this platform to reflect on all the things you
							have done in your life!
						</p>
						<p>
							The app allows you to view all your events in a
							timeline to see how far you have come.
						</p>
						<p>
							Click on About to learn more about why this was
							created!
						</p>
					</IntroContainer>
				</Grid>
			</Grid>

			<IntroLine edit={true} />

			<Grid container>
				<Grid item xs>
					<DashboardLink to='/dashboard/about'>
						<DashboardPaper about={true}>About</DashboardPaper>
					</DashboardLink>
				</Grid>
			</Grid>

			<Grid container>
				<Grid item xs={6}>
					<DashboardLink to='/dashboard/add'>
						<DashboardPaper leftBox={true}>
							Add To Story
						</DashboardPaper>
					</DashboardLink>
				</Grid>

				<Grid item xs={6}>
					<DashboardLink
						to='/dashboard/edit'
						state={{
							reflections: contextValue.reflections
						}}
					>
						<DashboardPaper rightBox={true}>
							Edit Your Story
						</DashboardPaper>
					</DashboardLink>
				</Grid>
			</Grid>

			<Grid container>
				<Grid item xs={6}>
					<DashboardLink to='/dashboard/view'>
						<DashboardPaper leftBox={true}>
							View You Story
						</DashboardPaper>
					</DashboardLink>
				</Grid>

				<Grid item xs={6}>
					<DashboardLink to='/dashboard/share'>
						<DashboardPaper rightBox={true}>
							Share Your Story
						</DashboardPaper>
					</DashboardLink>
				</Grid>
			</Grid>
		</DashboardPageContentContainer>
	);
}

export default DashboardPageContent;
