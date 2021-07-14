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

import { navigate } from 'gatsby';

// Components
import Header from './Header';
import Footer from './Footer';
import LandingFooter from './LandingFooter';
import LandingHeader from './LandingHeader';

// Styling
import '../../styles/global.scss';

import ThemeContext from '../../context/ThemeContext';
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

	const contextValue = React.useContext(ThemeContext);

	function test() {
		pp('Inside test()');
		console.log('What is contextValue.isLoggedIn');
		console.log(contextValue.isLoggedIn);

		if (contextValue.isLoggedIn === false && id !== 'indexPageContainer') {
			console.log('In Layout:: Show null!');
			navigate('/');
			return null;
		} else {
			console.log('In Layout:: Show content');
			return (
				<>
					{showHeader()}

					<main id={id}>{children}</main>

					{showFooter()}
				</>
			);
		}
	}

	return (
		<>
			{/* {showHeader()} */}

			{/* <main id={id}>{children}</main> */}
			{test()}

			{/* {showFooter()} */}
		</>
	);
}

export default Layout;
