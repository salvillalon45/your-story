// -----------------------------------------------
//
// Pages -> dashboard.js
// Desc: Main Navigation Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import DashboardPageContent from '../../components/DashboardPageContent';
// -----------------------------------------------

function DashboardIndexPage() {
	const id = 'dashboardPageContainer';

	return (
		<Layout id={id}>
			<section>
				<SEO title='Your Story' />

				<DashboardPageContent />
			</section>
		</Layout>
	);
}

export default DashboardIndexPage;
