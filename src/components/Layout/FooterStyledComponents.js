// -----------------------------------------------
//
// Footer Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';

const FooterLink = styled.p`
	&& {
		font-size: ${props => (props.landing ? '0.9rem' : '1.1rem')};
		color: ${props => (props.landing ? 'var(--white)' : 'var(--black)')};
		text-transform: ${props => (props.landing ? 'unset' : 'uppercase')};
		font-style: ${props => (props.landing ? 'italic' : 'unset')};

		font-family: var(--source);
		letter-spacing: 1.45px;
		margin-bottom: 5px;
	}
`;

const FooterContainer = styled.footer`
	flex-shrink: 0;
	margin-top: -27px;
`;

const FooterAnchor = styled.a`
	text-decoration: none;
	color: ${props => (props.landing ? 'var(--white)' : 'var(--turquoise)')};
`;

export { FooterLink, FooterContainer, FooterAnchor };
