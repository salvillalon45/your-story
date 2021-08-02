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
	const [userId, setUserId] = React.useState('');
	const [isLoaded, setIsLoaded] = React.useState(false);

	function handleIsChanged() {
		setIsChanged(!isChanged);
	}

	function handleIsLoggedIn(value) {
		setIsLoggedIn(value);
	}

	async function loadReflections(passedUserId = userId) {
		if (passedUserId) {
			const reflections = await getReflectionsFromDB(passedUserId);
			setReflections(reflections);
		}
	}

	async function loginUserCheck() {
		if (isLoggedIn === false) {
			firebase.auth().onAuthStateChanged(user => {
				if (user) {
					setUserId(user.uid);
					setIsLoggedIn(true);
					loadReflections(user.uid);
					setIsLoaded(true);
				} else {
					setIsLoggedIn(false);
					setIsLoaded(true);
				}
			});
		}
	}

	React.useEffect(async () => {
		await loadReflections();
	}, [isChanged]);

	React.useEffect(async () => {
		await loginUserCheck();
	}, [isLoggedIn]);

	return (
		<ThemeContext.Provider
			value={{
				reflections,
				handleIsChanged: handleIsChanged,
				handleIsLoggedIn: handleIsLoggedIn,
				isLoggedIn: isLoggedIn,
				userId: userId,
				isLoaded: isLoaded
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;

export { ThemeProvider };
