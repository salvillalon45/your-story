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

// React Context
import ThemeContext from '../../../context/ThemeContext';

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

// Styling
import {
	TimelineYear,
	TimelineContentTitle,
	TimelineContentDescription,
	TimelineContentPaper
} from '../ViewPageContentStyledComponents';
// -----------------------------------------------

const useStyles = makeStyles(theme => ({
	paper: {
		padding: '6px 16px'
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main
	},
	timelineConnector: { backgroundColor: 'var(--turquoise)' },
	icon: {
		color: 'var(--turquoise)',
		borderColor: 'var(--turquoise)',
		backgroundColor: 'transparent'
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

					return (
						<TimelineItem>
							<TimelineOppositeContent>
								<TimelineYear>{year}</TimelineYear>
							</TimelineOppositeContent>

							<TimelineSeparator>
								<TimelineDot className={classes.icon}>
									<GradeIcon />
								</TimelineDot>
								<TimelineConnector
									className={classes.timelineConnector}
								/>
							</TimelineSeparator>

							<TimelineContent>
								<TimelineContentPaper
									elevation={3}
									className={classes.paper}
								>
									<TimelineContentTitle>
										Events in {year}
									</TimelineContentTitle>

									<TimelineContentDescription>
										{events}
									</TimelineContentDescription>
								</TimelineContentPaper>
							</TimelineContent>
						</TimelineItem>
					);
				}
			);
		}
	}

	return <Timeline align='alternate'>{createTimelineContent()}</Timeline>;
}

export default StoryTimeline;
