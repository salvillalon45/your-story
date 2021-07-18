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
import SEO from '../../components/seo';
import AboutPageContent from '../../components/AboutPageContent';
// -----------------------------------------------

function AboutPage() {
	const id = 'aboutPageContainer';

	return (
		<Layout id={id}>
			<section>
				<SEO title='About' />

				<AboutPageContent />
			</section>
		</Layout>
	);
}

export default AboutPage;
