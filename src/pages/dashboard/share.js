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

// Components
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import SharePageContent from '../../components/SharePageContent';
// -----------------------------------------------

function SharePage() {
	const id = 'sharePageContainer';

	return (
		<Layout id={id}>
			<section>
				<Seo title='Share Your Story' />

				<SharePageContent />
			</section>
		</Layout>
	);
}

export default SharePage;
