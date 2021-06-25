// -----------------------------------------------
//
// Dashboard Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
// Gatsby
import { Link } from 'gatsby';

const DashboardLink = styled(Link)`
	text-decoration: none;
`;

const DashboardPageContentContainer = styled.div`
	margin-bottom: 40px;
`;

const DashboardPaper = styled(Paper)`
	cursor: pointer;
	text-align: center;

	&& {
		border: 6px solid var(--turquoise);
		color: var(--turquoise);
		background-color: transparent;
		width: ${props => (props.about ? '25%' : '50%')};
		margin: 0 auto;
		padding: 20px;
		margin-bottom: ${props => (props.about ? '38px' : '22px')};
		margin-right: ${props => (props.leftBox ? '20px' : '')};
		margin-left: ${props => (props.rightBox ? '20px' : '')};
	}
`;

export { DashboardPageContentContainer, DashboardPaper, DashboardLink };
