// -----------------------------------------------
//
// Pages -> view.js
// Desc: View Timeline Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ViewPageContent from '../components/ViewPageContent';
// -----------------------------------------------

function ViewPage() {
	const id = 'viewPageContainer';

	return (
		<Layout id={id}>
			<SEO title='Your Story' />
			<p>VIEW PAGE</p>
			{/* <ViewPageContent /> */}
		</Layout>
	);
}

export default ViewPage;
