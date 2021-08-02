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

// Components
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import ViewPageContent from '../../components/ViewPageContent';
// -----------------------------------------------

function ViewPage() {
	const id = 'viewPageContainer';

	return (
		<Layout id={id}>
			<section>
				<Seo title='View Your Story' />

				<ViewPageContent />
			</section>
		</Layout>
	);
}

export default ViewPage;
