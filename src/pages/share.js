// -----------------------------------------------
//
// Pages -> share.js
// Desc: Share Page
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
import SharePageContent from '../components/SharePageContent';
// -----------------------------------------------

function SharePage() {
	const id = 'sharePageContainer';

	return (
		<Layout id={id}>
			<section>
				<SEO title='Your Story' />

				<SharePageContent />
			</section>
		</Layout>
	);
}

export default SharePage;
