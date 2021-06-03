// -----------------------------------------------
//
// util -> firebaseUtil.js
// Desc: Functions to interact with Firebase Realtime DB
//
// -----------------------------------------------

import firebase from 'gatsby-plugin-firebase';

async function getYearDataFromDB() {
	const snapshot = await firebase
		.database()
		.ref('yearsData/' + 1)
		.once('value');

	return snapshot.val();
}

function pushToDatabase(yearData, userId) {
	console.log('Inside pushToDatabase');
	const reference = firebase.database().ref('yearsData/' + userId);
	console.log(reference);
	const newReference = reference.push();

	newReference.set({
		yearData
	});
}

// async function getUserResultsFromDB() {
// 	const snapshot = await firebase.database().ref('userResults').once('value');

// 	return orderUserResults(Object.values(snapshot.val()));
// }

export { pushToDatabase, getYearDataFromDB };
