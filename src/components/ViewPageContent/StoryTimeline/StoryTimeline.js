// -----------------------------------------------
//
// ViewPageContent -> StoryTimeline.js
// Desc: Component to show the timeline to user
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import GradeIcon from '@material-ui/icons/Grade';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// React Context
import ThemeContext from '../../../context/ThemeContext';
// -----------------------------------------------

const useStyles = makeStyles(theme => ({
	paper: {
		padding: '6px 16px'
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main
	}
}));

function StoryTimeline() {
	const classes = useStyles();
	const contextValue = React.useContext(ThemeContext);

	function createTimelineContent() {
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
							<TimelineItem>
								<TimelineOppositeContent>
									<Typography
										variant='body2'
										color='textSecondary'
									>
										{year}
									</Typography>
								</TimelineOppositeContent>

								<TimelineSeparator>
									<TimelineDot>
										<GradeIcon />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>

								<TimelineContent>
									<Paper
										elevation={3}
										className={classes.paper}
									>
										<Typography variant='h6' component=''>
											Events in {year}
										</Typography>

										<Typography>{events}</Typography>
									</Paper>
								</TimelineContent>
							</TimelineItem>
						</>
					);
				}
			);
		}
	}

	return <Timeline align='alternate'>{createTimelineContent()}</Timeline>;
}

export default StoryTimeline;
