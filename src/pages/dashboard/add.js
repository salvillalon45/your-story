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
import Seo from '../../components/seo';
import AddPageContent from '../../components/AddPageContent';
// -----------------------------------------------

function AddPage() {
	const id = 'addPageContainer';

	return (
		<Layout id={id}>
			<section>
				<Seo title='Add To Story' />

				<AddPageContent />
			</section>
		</Layout>
	);
}

export default AddPage;
