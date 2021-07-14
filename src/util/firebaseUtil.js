// -----------------------------------------------
//
// util -> firebaseUtil.js
// Desc: Functions to interact with Firebase Realtime DB
//
// -----------------------------------------------

// Firebase
import firebase from 'gatsby-plugin-firebase';

// Gatsby
import { navigate } from 'gatsby';

import { orderYears } from './mainUtil';

async function getReflectionsFromDB(userId) {
	const snapshot = await firebase
		.database()
		.ref(`reflections/${userId}`)
		.once('value');

	// console.log('What is snapshot val');
	// console.log(snapshot.val());
	return snapshot.val();
	// return orderYears(snapshot.val());
}

function insertNewReflection(reflections, userId) {
	const reference = firebase.database().ref(`reflections/${userId}`);
	const newReference = reference.push();

	newReference.set(reflections);
}

async function deleteReflection(userId, reflectionId) {
	const reference = firebase
		.database()
		.ref(`reflections/${userId}/${reflectionId}`);

	await reference.remove();
}

function updateReflection(reflectionId, userId, updatedReflection) {
	const reference = firebase
		.database()
		.ref(`reflections/${userId}/${reflectionId}`);

	reference.update({
		year: updatedReflection['year'],
		events: updatedReflection['events']
	});
}

async function createNewUser(email, password) {
	firebase.auth().createUserWithEmailAndPassword(email, password);
}

async function logoutUser() {
	firebase.auth().signOut();
}

async function loginUser(email, password) {
	firebase.auth().signInWithEmailAndPassword(email, password);
}

// function authStateListener() {
// 	let result = false;

// 	firebase.auth().onAuthStateChanged(user => {
// 		if (user) {
// 			console.log('User has logged in: ', user);
// 			result = true;
// 		} else {
// 			console.log('User logged out');
// 			result = false;
// 			navigate('/');
// 			return null;
// 		}
// 	});
// 	console.log('What is result');
// 	console.log({ result });
// 	return result;
// }

// async function getUserResultsFromDB() {
// 	const snapshot = await firebase.database().ref('userResults').once('value');

// 	return orderUserResults(Object.values(snapshot.val()));
// }

export {
	updateReflection,
	insertNewReflection,
	getReflectionsFromDB,
	deleteReflection,
	loginUser,
	// authStateListener,
	createNewUser,
	logoutUser
};
