// -----------------------------------------------
//
// View Page Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const ViewPageContentContainer = styled.div``;

const TimelineYear = styled.p`
	color: var(--white);
	font-family: var(--source);
	font-size: 2rem;
`;

const TimelineContentTitle = styled.p`
	font-family: var(--source);
	font-weight: bolder;
	text-align: center;
	font-size: 1.5rem;
`;

const TimelineContentDescription = styled.p`
	font-size: 0.8rem;
	font-family: var(--source);
	font-weight: 400;
	line-height: 1.5;
	letter-spacing: 0.00938em;
	white-space: pre-line;
`;

const TimelineContentPaper = styled(Paper)`
	&& {
		background-color: transparent;
		color: var(--white);
		border: 2px solid var(--white);
	}
`;

export {
	ViewPageContentContainer,
	TimelineYear,
	TimelineContentTitle,
	TimelineContentDescription,
	TimelineContentPaper
};
