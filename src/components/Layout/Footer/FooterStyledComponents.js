// -----------------------------------------------
//
// Footer Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';

const FooterLink = styled.p`
	&& {
		font-family: var(--source);
		font-size: 1.1rem;
		color: var(--black);
		letter-spacing: 1.45px;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
`;

const FooterContainer = styled.footer`
	flex-shrink: 0;
	margin-top: -27px;
`;

const FooterAnchor = styled.a`
	text-decoration: none;
	color: var(--turquoise);
`;

export { FooterLink, FooterContainer, FooterAnchor };
