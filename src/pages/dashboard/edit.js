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
import Seo from '../../components/seo';
import EditPageContent from '../../components/EditPageContent';
// -----------------------------------------------

function EditPage() {
	const id = 'editPageContainer';

	return (
		<Layout id={id}>
			<section>
				<Seo title='Edit Your Story' />

				<EditPageContent />
			</section>
		</Layout>
	);
}

export default EditPage;
