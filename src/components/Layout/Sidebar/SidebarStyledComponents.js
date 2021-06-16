// -----------------------------------------------
//
// Sidebar Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const SidebarContentContainer = styled.div``;

const SidebarContainer = styled.div``;

const MenuButton = styled(Button)`
	&& {
		font-family: var(--source);
		font-size: 1.1rem;
		color: var(--black);
		letter-spacing: 1.45px;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
`;

export { SidebarContentContainer, SidebarContainer, MenuButton };
