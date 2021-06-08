// -----------------------------------------------
//
// util -> firebaseUtil.js
// Desc: Functions to interact with Firebase Realtime DB
//
// -----------------------------------------------

import firebase from 'gatsby-plugin-firebase';

async function getYearsDataFromDB(userId) {
	const snapshot = await firebase
		.database()
		.ref('yearsData/' + userId)
		.once('value');

	return snapshot.val();
}

function pushToDatabase(yearsData, userId) {
	const reference = firebase.database().ref('yearsData/' + userId);
	const newReference = reference.push();

	newReference.set(yearsData);
}

// async function getUserResultsFromDB() {
// 	const snapshot = await firebase.database().ref('userResults').once('value');

// 	return orderUserResults(Object.values(snapshot.val()));
// }

export { pushToDatabase, getYearsDataFromDB };
