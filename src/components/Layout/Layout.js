// -----------------------------------------------
//
// Layout -> Layout.js
// Desc: Layout component that queries for data
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Header from './Header';
import Footer from './Footer';

// Styling
import '../../styles/global.scss';
// -----------------------------------------------

function Layout(props) {
	const { id, children } = props;

	// 	const data = useStaticQuery(graphql`
	//     query SiteTitleQuery {
	//       site {
	//         siteMetadata {
	//           title
	//         }
	//       }
	//     }
	//   `)

	{
		/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */
	}
	return (
		<>
			<Header />

			<main id={id}>{children}</main>

			<Footer />
		</>
	);
}

export default Layout;
