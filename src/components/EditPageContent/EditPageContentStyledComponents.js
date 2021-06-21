// -----------------------------------------------
//
// Edit Page Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';

const YearContainer = styled.div`
	text-align: center;
`;

const YearTitle = styled.p`
	font-size: 2.5rem;
	font-weight: bolder;
	font-family: var(--rufina);
`;

const ActionsContainer = styled.div``;

const EventsContainer = styled.div`
	width: 70%;
	margin: 0 auto;
`;

const EditPageContentContainer = styled.div``;

const EditReflectionContainer = styled.div`
	color: var(--white);
`;

const EventsText = styled.p`
	white-space: pre-line;
`;

export {
	YearContainer,
	YearTitle,
	ActionsContainer,
	EventsContainer,
	EditPageContentContainer,
	EditReflectionContainer,
	EventsText
};
