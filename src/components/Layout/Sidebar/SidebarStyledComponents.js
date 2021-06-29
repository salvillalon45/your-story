// -----------------------------------------------
//
// Sidebar Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

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

const SidebarLine = styled(Divider)`
	&& {
		background-color: var(--white);
		${'' /* margin-top: 31px;
		margin-bottom: 39px; */}
		height: 5px;
	}
`;

export { SidebarContentContainer, SidebarContainer, MenuButton, SidebarLine };
