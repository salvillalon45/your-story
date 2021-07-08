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

// Gatsby
import { Link } from 'gatsby';

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
				<SEO title='Your Story' />

				<AboutPageContent />
			</section>
		</Layout>
	);
}

export default AboutPage;
