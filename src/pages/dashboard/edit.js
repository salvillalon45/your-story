// -----------------------------------------------
//
// Pages -> edit.js
// Desc: Edit Years Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import EditPageContent from '../../components/EditPageContent';
// -----------------------------------------------

function EditPage() {
	const id = 'editPageContainer';

	return (
		<Layout id={id}>
			<section>
				<SEO title='Your Story' />

				<EditPageContent />
			</section>
		</Layout>
	);
}

export default EditPage;
