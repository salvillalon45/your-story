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
			<section>
				<SEO title='Your Story' />

				<ViewPageContent />
			</section>
		</Layout>
	);
}

export default ViewPage;
