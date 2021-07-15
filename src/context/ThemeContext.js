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

// Firebase
import firebase from 'gatsby-plugin-firebase';

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
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	function handleIsChanged() {
		setIsChanged(!isChanged);
	}

	function handleIsLoggedIn(value) {
		console.log('Inside handleIsLoggedIn');
		setIsLoggedIn(value);
	}

	async function loadReflections() {
		const userId = 1;
		const reflections = await getReflectionsFromDB(userId);
		setReflections(reflections);
	}

	function loginUserCheck() {
		console.log('Inside loginUserCheck()');
		console.log({ isLoggedIn });
		if (isLoggedIn === false) {
			firebase.auth().onAuthStateChanged(user => {
				if (user) {
					console.log('User has logged in: ');
					setIsLoggedIn(true);
				} else {
					console.log('User logged out');
					setIsLoggedIn(false);
				}
			});
		}
	}

	React.useEffect(async () => {
		await loadReflections();
	}, [isChanged]);

	React.useEffect(() => {
		loginUserCheck();
	}, [isLoggedIn]);

	return (
		<ThemeContext.Provider
			value={{
				reflections,
				handleIsChanged: handleIsChanged,
				handleIsLoggedIn: handleIsLoggedIn,
				isLoggedIn: isLoggedIn
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;

export { ThemeProvider };
