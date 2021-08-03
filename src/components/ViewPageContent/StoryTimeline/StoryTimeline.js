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

// Print
import ReactToPrint from 'react-to-print';

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
import {
	GreenButton,
	ButtonContainer
} from '../../../styles/globalStyledComponents';
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

const pageStyle = `
	@page {
		size: 20mm 10mm;
	}

	@media all {
		.pagebreak {
			display: none;
		}
	}

	@media print {
		.pagebreak {
		page-break-before: always;
		}
	}
`;

function StoryTimeline() {
	const classes = useStyles();
	const componentRef = React.useRef();
	const contextValue = React.useContext(ThemeContext);

	function createTimelineContent() {
		if (!contextValue.reflections) {
			return null;
		} else {
			let reflectionContainerArray = [];

			for (let [reflectionId, reflection] of contextValue.reflections) {
				const events = reflection.events;
				const year = reflection.year;

				reflectionContainerArray.push(
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

			return reflectionContainerArray;
		}
	}

	return (
		<>
			<ReactToPrint
				pageStyle={pageStyle}
				trigger={() => (
					<ButtonContainer>
						<GreenButton type='submit'>
							Print Your Story
						</GreenButton>
					</ButtonContainer>
				)}
				content={() => componentRef.current}
			/>

			<Timeline ref={componentRef} align='alternate'>
				{createTimelineContent()}
			</Timeline>
		</>
	);
}

export default StoryTimeline;
