// -----------------------------------------------
//
// Header Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';

const HeaderLogo = styled.h1`
	color: var(--black);
	font-family: var(--rufina);
	font-size: 2rem;
	letter-spacing: 1.45px;
	padding-top: 12px;
	margin-bottom: 18px;
`;

const HeaderToolbar = styled(Toolbar)`
	background-color: var(--white);
	align-content: center;
	justify-content: space-between;

	&& {
		align-items: baseline;
	}
`;

export { HeaderLogo, HeaderToolbar };
