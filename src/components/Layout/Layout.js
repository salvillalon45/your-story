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
import LandingFooter from './LandingFooter';
import LandingHeader from './LandingHeader';

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

	function showFooter() {
		if (id === 'indexPageContainer') {
			return <LandingFooter />;
		}

		return <Footer />;
	}

	function showHeader() {
		if (id === 'indexPageContainer') {
			return <LandingHeader />;
		}

		return <Header />;
	}

	return (
		<>
			{showHeader()}

			<main id={id}>{children}</main>

			{showFooter()}
		</>
	);
}

export default Layout;
