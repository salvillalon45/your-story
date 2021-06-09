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

	React.useEffect(async () => {
		console.log('Inside UseEffect in ThemeProvider');
		const userId = 1;
		const reflections = await getReflectionsFromDB(userId);
		setReflections(reflections);
		console.table(reflections);
	}, [isChanged]);

	return (
		<ThemeContext.Provider
			value={{
				reflections,
				handleIsChanged: handleIsChanged
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;

export { ThemeProvider };
