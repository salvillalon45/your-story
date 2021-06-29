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
import { getReflectionsFromDB } from '../util/firebaseUtil';

// Set Up
const defaultState = {};
const ThemeContext = React.createContext(defaultState);
// -----------------------------------------------

function ThemeProvider(props) {
	const { children } = props;
	const [reflections, setReflections] = React.useState('');
	const [isChanged, setIsChanged] = React.useState(false);

	function handleIsChanged() {
		setIsChanged(!isChanged);
	}

	async function loadReflections() {
		console.log('Inside UseEffect in ThemeProvider');
		const userId = 1;
		const reflections = await getReflectionsFromDB(userId);
		setReflections(reflections);
		console.table(reflections);
	}

	// async function loginUserCheck() {
	// 	if (authStateListener() === null) {
	// 		return null;
	// 	} else {
	// 		await loadReflections();
	// 		// return { children };
	// 	}
	// }

	React.useEffect(async () => {
		await loadReflections();
		// await loginUserCheck();
	}, [isChanged]);

	return (
		<ThemeContext.Provider
			value={{
				reflections,
				handleIsChanged: handleIsChanged
			}}
		>
			{children}
			{/* {loginUserCheck()} */}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;

export { ThemeProvider };
