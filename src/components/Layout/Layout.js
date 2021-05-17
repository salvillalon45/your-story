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

	React.useEffect(() => {
		console.log('Inside Use Effect in Layout');
		// children.props = { 1: 2 };
		console.log(window);
		console.log(children);
	});

	return (
		<>
			{/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
			<Header />

			<main id={id}>{children}</main>

			<Footer />
		</>
	);
}

export default Layout;
