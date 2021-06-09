// -----------------------------------------------
//
// util -> firebaseUtil.js
// Desc: Functions to interact with Firebase Realtime DB
//
// -----------------------------------------------

import firebase from 'gatsby-plugin-firebase';

import { orderYears } from './mainUtil';

async function getReflectionsFromDB(userId) {
	const snapshot = await firebase
		.database()
		.ref(`reflections/${userId}`)
		.once('value');

	console.log('What is snapshot val');
	console.log(snapshot.val());
	return snapshot.val();
	// return orderYears(snapshot.val());
}

function pushToDatabase(reflections, userId) {
	const reference = firebase.database().ref(`reflections/${userId}`);
	const newReference = reference.push();

	newReference.set(reflections);
}

async function deleteFromDatabase(userId, yearId) {
	const reference = firebase
		.database()
		.ref(`reflections/${userId}/${yearId}`);

	await reference.remove();
}

// async function getUserResultsFromDB() {
// 	const snapshot = await firebase.database().ref('userResults').once('value');

// 	return orderUserResults(Object.values(snapshot.val()));
// }

export { pushToDatabase, getReflectionsFromDB, deleteFromDatabase };
