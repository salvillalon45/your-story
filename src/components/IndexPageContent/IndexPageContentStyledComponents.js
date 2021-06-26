// -----------------------------------------------
//
// Index Page Styled Components
//
// -----------------------------------------------

import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const IndexPageContentContainer = styled.div`
	padding-top: 120px;
	padding-left: 100px;
	padding-right: 100px;

	@media only screen and (max-width: 1024px) {
		padding-top: 120px;
		padding-left: 100px;
		padding-right: 100px;
	}

	@media only screen and (max-width: 768px) {
		padding-top: 46px;
		padding-left: 26px;
		padding-right: 26px;
	}

	@media only screen and (max-width: 320px) {
		padding-left: 1px;
		padding-right: 1px;
	}
`;

const LandingText = styled.p`
	color: var(--white);
`;

const LandingTitle = styled.p`
	font-family: var(--rufina);
	font-size: 4rem;
	color: var(--white);
	font-weight: 700;
`;

const LandingButton = styled(Button)`
	&& {
		color: var(--turquoise);
		font-family: var(--source);
		background-color: transparent;
		border-color: var(--turquoise);
		border: 3px solid;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-right: 25px;
		padding-left: 25px;
		text-transform: capitalize;

		&:hover {
			${'' /* color: red; */}
		}
	}
`;

export { LandingButton, LandingTitle, IndexPageContentContainer, LandingText };
