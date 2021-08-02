// -----------------------------------------------
//
// Pages -> about.js
// Desc: About Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import AboutPageContent from '../../components/AboutPageContent';
// -----------------------------------------------

function AboutPage() {
	const id = 'aboutPageContainer';

	return (
		<Layout id={id}>
			<section>
				<Seo title='About' />

				<AboutPageContent />
			</section>
		</Layout>
	);
}

export default AboutPage;
