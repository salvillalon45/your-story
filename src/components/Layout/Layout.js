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

// Gastby
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
// -----------------------------------------------

function Layout(props) {
	const { id, children } = props;
	const contextValue = React.useContext(ThemeContext);

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

	function showLayoutContent() {
		if (contextValue.isLoaded) {
			// Flag isLoaded become true when it has finished checking for the user. It will either
			// be empty or an actual userId

			if (contextValue.userId === '' && id !== 'indexPageContainer') {
				// User has not logged in and is trying to access page without logging
				// If this happens then return null and redirect to landing
				navigate('/');
				return null;
			} else {
				return (
					<>
						{showHeader()}

						<main id={id}>{children}</main>

						{showFooter()}
					</>
				);
			}
		}

		// If it has not loaded return null
		return null;
	}

	return showLayoutContent();
}

export default Layout;
