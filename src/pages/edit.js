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

function EditPage(props) {
	const { state } = props.location;
	const id = 'editPageContainer';

	let result = {};

	if (state) {
		result = state.reflections;
	}

	return (
		<Layout id={id}>
			<section>
				<SEO title='Your Story' />

				<EditPageContent reflections={result} />
			</section>
		</Layout>
	);
}

export default EditPage;
