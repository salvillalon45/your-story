// -----------------------------------------------
//
// Pages -> add.js
// Desc: Add Year Page
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
// import AddPageContent from '../components/AddPageContent';
// -----------------------------------------------

function AddPage() {
	const id = 'addPageContainer';

	return (
		<Layout id={id}>
			<SEO title='Your Story' />
			<p>ADD PAGE</p>
			{/* <AddPageContent /> */}
		</Layout>
	);
}

export default AddPage;
