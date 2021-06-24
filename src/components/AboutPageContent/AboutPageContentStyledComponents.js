// -----------------------------------------------
//
// About Page Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';

const AboutPageContentContainer = styled.div``;

const AboutTextContainer = styled.div`
	color: var(--white);
	margin: 0 auto;
	margin-top: 30px;

	@media only screen and (max-width: 2560px) {
		width: 20%;
	}

	@media only screen and (max-width: 1440px) {
		width: 40%;
	}

	@media only screen and (max-width: 1024px) {
		width: 54%;
		margin-bottom: 60px;
	}

	@media only screen and (max-width: 768px) {
		width: 60%;
		margin-bottom: 60px;
	}
`;

export { AboutPageContentContainer, AboutTextContainer };
