// -----------------------------------------------
//
// Footer Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';

const FooterLink = styled.p`
	&& {
		font-family: var(--source);
		font-size: 0.9rem;
		color: var(--white);
		letter-spacing: 1.45px;
		font-style: italic;
		margin-bottom: 5px;
	}
`;

const FooterContainer = styled.footer`
	flex-shrink: 0;
	margin-top: -27px;
`;

const FooterAnchor = styled.a`
	text-decoration: none;
	color: var(--white);
`;

export { FooterLink, FooterContainer, FooterAnchor };
