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
import { getReflectionsFromDB, authStateListener } from '../util/firebaseUtil';
import { pp } from '../util/mainUtil';

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

	async function loadReflections() {
		console.log('Inside UseEffect in ThemeProvider');
		const userId = 1;
		const reflections = await getReflectionsFromDB(userId);
		setReflections(reflections);
		// console.table(reflections);
	}

	function loginUserCheck() {
		console.log('Inside loginUserCheck()');
		// if (authStateListener() === false) {
		// 	console.log('Not Logged In');
		// 	setIsLoggedIn(false);
		// } else {
		// 	console.log('Logged IN');
		// 	setIsLoggedIn(true);
		// }
		// console.group('CUrrent User');
		// console.log(firebase.auth().currentUser);
		// console.groupEnd('CUrrent User');
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				console.log('User has logged in: ', user);
				// result = true;
				setIsLoggedIn(true);
			} else {
				console.log('User logged out');
				// result = false;
				setIsLoggedIn(false);
				// navigate('/');
				// window.location.href = '/';
				// return null;
			}
		});
	}

	React.useEffect(async () => {
		await loadReflections();
	}, [isChanged]);

	React.useEffect(() => {
		pp('Use Effect for LoginUserCheck');
		loginUserCheck();
	}, [isLoggedIn]);

	return (
		<ThemeContext.Provider
			value={{
				reflections,
				handleIsChanged: handleIsChanged,
				isLoggedIn: isLoggedIn
			}}
		>
			{children}
			{/* {loginUserCheck()} */}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;

export { ThemeProvider };
