// -----------------------------------------------
//
// Context -> ThemeContext.js
// Desc: React Context that allows props to be global
// and be passed around in Components!
//
// -----------------------------------------------

// -----------------------------------------------
// Imports
import * as React from 'react';

// Util
import { getYearsDataFromDB } from '../util/firebaseUtil';

// Set Up
const defaultState = {};
const ThemeContext = React.createContext(defaultState);
// -----------------------------------------------

function ThemeProvider(props) {
	const [yearsData, setYearsData] = React.useState('');
	const { children } = props;

	React.useEffect(async () => {
		console.log('Inside UseEffect in ThemeProvider');
		const userId = 1;
		const yearsData = await getYearsDataFromDB(userId);
		setYearsData(yearsData);
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				yearsData
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;

export { ThemeProvider };
