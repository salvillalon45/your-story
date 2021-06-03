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

// Util
import { getYearsDataFromDB } from '../../util/firebaseUtil';
// -----------------------------------------------

export const YearsDataContext = React.createContext(null);

function Layout(props) {
	const [yearsData, setYearsData] = React.useState('');
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

	React.useEffect(async () => {
		console.log('Inside Use Effect in Layout');
		const userId = 1;
		const yearsData = await getYearsDataFromDB(userId);
		setYearsData(yearsData);
	});

	return (
		<YearsDataContext.Provider value={yearsData}>
			{/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
			<Header />

			<main id={id}>{children}</main>

			<Footer />
		</YearsDataContext.Provider>
	);
}

export default Layout;
