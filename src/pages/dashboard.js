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

// Gatsby
import { Link } from 'gatsby';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
import DashboardPageContent from '../components/DashboardPageContent';
// -----------------------------------------------

function DashboardPage() {
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

export default DashboardPage;
