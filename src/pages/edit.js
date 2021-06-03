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

// Gatsby
import { Link } from 'gatsby';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
import EditPageContent from '../components/EditPageContent';
// -----------------------------------------------

function EditPage() {
	const id = 'editPageContainer';

	return (
		<Layout id={id}>
			<SEO title='Your Story' />

			<EditPageContent />
		</Layout>
	);
}

export default EditPage;
