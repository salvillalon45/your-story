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
import { getReflectionsFromDB, getUserId } from '../util/firebaseUtil';

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

	function handleIsChanged() {
		setIsChanged(!isChanged);
	}

	function handleIsLoggedIn(value) {
		console.log('Inside handleIsLoggedIn');
		setIsLoggedIn(value);
	}

	async function loadReflections(passedUserId = userId) {
		// const userId = 1;
		console.log('Inside loadReflections');
		// getUserId();
		console.log({ passedUserId });
		if (passedUserId) {
			const reflections = await getReflectionsFromDB(passedUserId);
			console.table(reflections);
			setReflections(reflections);
		}
	}

	async function loginUserCheck() {
		console.group('Inside loginUserCheck()');
		console.log({ isLoggedIn });
		if (isLoggedIn === false) {
			firebase.auth().onAuthStateChanged(user => {
				if (user) {
					console.log('User has logged in: ');
					console.log('uid');
					console.log(user.uid);
					setUserId(getUserId());
					setIsLoggedIn(true);
					loadReflections(user.uid);
				} else {
					console.log('User logged out');
					setIsLoggedIn(false);
				}
			});
		}
		console.log('User Id Check');
		console.log({ userId });

		console.groupEnd('Inside loginUserCheck()');
	}

	React.useEffect(async () => {
		console.log('Inside useEffect() for loadReflections');
		console.log({ userId });
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
				userId: userId
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;

export { ThemeProvider };
