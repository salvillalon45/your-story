// -----------------------------------------------
//
// Dashboard Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const DashboardContentContainer = styled.div``;

const DashboardPaper = styled(Paper)`
	cursor: pointer;
	text-align: center;

	&& {
		border: 6px solid var(--turquoise);
		color: var(--turquoise);
		background-color: transparent;
	}
`;

export { DashboardContentContainer, DashboardPaper };
