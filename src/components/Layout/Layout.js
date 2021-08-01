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

// React Context
import ThemeContext from '../../context/ThemeContext';

// Util
import { getUserId } from '../../util/firebaseUtil';
// -----------------------------------------------

function Layout(props) {
	const { id, children } = props;
	const [show, setShow] = React.useState(true);
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
		} else if (
			id === 'addPageContainer' ||
			id === 'editPageContainer' ||
			id === 'aboutPageContainer' ||
			id === 'viewPageContainer' ||
			id === 'sharePageContainer'
		) {
			return null;
		} else {
			return <Footer />;
		}
	}

	function showHeader() {
		if (id === 'indexPageContainer') {
			return <LandingHeader />;
		}

		return <Header />;
	}

	const contextValue = React.useContext(ThemeContext);

	function showLayoutContent() {
		// console.group('Inside test in layout');
		// pp('Inside test()');
		console.log('What is contextValue.userId');
		console.log(contextValue.userId);
		console.log({ id });
		// console.groupEnd('Inside test in layout');

		// if (contextValue.isLoggedIn === false && id !== 'indexPageContainer') {
		if (contextValue.userId === '' && id !== 'indexPageContainer') {
			// User has not logged in and is trying to access page without logging
			// If this happens then return null and redirect to landing
			console.log('In Layout:: Show null!');
			navigate('/');
			return null;
		} else if (
			contextValue.userId &&
			getUserId() !== null &&
			contextValue.isLoggedIn
		) {
			// if (id === 'aboutPageContainer') {
			// 	navigate('/dashboard/about');
			// } else if (id === 'addPageContainer') {
			// 	navigate('/dashboard/add');
			// } else if (id === 'editPageContainer') {
			// 	navigate('/dashboard/edit');
			// } else if (id === 'viewPageContainer') {
			// 	navigate('/dashboard/view');
			// } else if (id === 'sharePageContainer') {
			// 	navigate('/dashboard/share');
			// } else {
			// 	navigate('/dashboard');
			// }

			return (
				<>
					{showHeader()}

					<main id={id}>{children}</main>

					{showFooter()}
				</>
			);
		} else {
			return null;
		}
	}

	return showLayoutContent();
	// function test() {
	// 	if (show) {
	// 		return (
	// 			<>
	// 				{showHeader()}

	// 				<main id={id}>{children}</main>

	// 				{showFooter()}
	// 			</>
	// 		);
	// 	} else if (show === false) {
	// 		// navigate('/');
	// 		return null;
	// 	}
	// }
	// return test();
}

export default Layout;
