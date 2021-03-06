// -----------------------------------------------
//
// Pages -> 404.js
// Desc: 404 Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import Seo from '../components/Seo';
// -----------------------------------------------

function NotFoundPage() {
	return (
		<Layout>
			<section>
				<Seo title='404: Not found' />

				<h1>404: Not Found</h1>

				<p>
					You just hit a route that doesn&#39;t exist... the sadness.
				</p>
			</section>
		</Layout>
	);
}

export default NotFoundPage;
