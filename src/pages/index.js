// -----------------------------------------------
//
// Pages -> index.js
// Desc: Home Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';
import { Router } from '@reach/router';

// Gatsby
import { Link } from 'gatsby';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
import IndexPageContent from '../components/IndexPageContent';
// -----------------------------------------------

function IndexPage() {
	const id = 'indexPageContainer';

	return (
		<Layout id={id}>
			{/* <Router> */}
			<section>
				<SEO title='Your Story' />

				<IndexPageContent />
			</section>
			{/* </Router> */}
		</Layout>
	);
}

export default IndexPage;
