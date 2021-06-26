// -----------------------------------------------
//
// Header Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';

const HeaderLogo = styled.h1`
	color: var(--white);
	font-family: var(--rufina);
	font-size: 1rem;
	letter-spacing: 1.45px;
	padding-top: 12px;
	margin-bottom: 18px;
	font-weight: 100;
`;

const HeaderToolbar = styled(Toolbar)`
	&& {
		align-items: baseline;
		background-color: transparent;
		align-content: center;
		justify-content: space-between;
	}
`;

export { HeaderLogo, HeaderToolbar };
