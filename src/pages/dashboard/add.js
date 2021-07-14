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

// Components
import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import AddPageContent from '../../components/AddPageContent';
// -----------------------------------------------

function AddPage() {
	const id = 'addPageContainer';

	return (
		<Layout id={id}>
			<section>
				<SEO title='Your Story' />

				<AddPageContent />
			</section>
		</Layout>
	);
}

export default AddPage;
