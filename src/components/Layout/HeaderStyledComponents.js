// -----------------------------------------------
//
// Header Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';

const HeaderContainer = styled.header``;

const HeaderLogo = styled.h1`
	color: ${props => (props.landing ? 'var(--white)' : 'var(--black)')};
	font-size: ${props => (props.landing ? '1rem' : '2rem')};
	font-weight: ${props => (props.landing ? '100' : 'unset')};

	font-family: var(--rufina);
	letter-spacing: 1.45px;
	padding-top: 12px;
	margin-bottom: 18px;
`;

const HeaderToolbar = styled(Toolbar)`
	&& {
		background-color: ${props =>
			props.landing ? 'transparent' : 'var(--white)'};
		align-items: baseline;
		background-color: transparent;
		align-content: center;
		justify-content: space-between;
	}
`;

export { HeaderLogo, HeaderToolbar, HeaderContainer };
