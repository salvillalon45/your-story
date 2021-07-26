// -----------------------------------------------
//
// util -> firebaseUtil.js
// Desc: Functions to interact with Firebase Realtime DB
//
// -----------------------------------------------

// Firebase
import firebase from 'gatsby-plugin-firebase';

import { orderYears } from './mainUtil';

async function getReflectionsFromDB(userId) {
	console.log('What is userId');
	console.log({ userId });
	const snapshot = await firebase
		.database()
		.ref(`reflections/${userId}`)
		.once('value');
	console.table(snapshot.val());
	return orderYears(snapshot.val());
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
	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);
	} catch (error) {
		return error.message;
	}
}

async function logoutUser() {
	firebase.auth().signOut();
}

async function loginUser(email, password) {
	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
	} catch (error) {
		return error.message;
	}
}

function getUserId() {
	try {
		return firebase.auth().currentUser.uid;
	} catch (error) {
		console.log('Error is getUserId');
		console.log(error);
		return null;
	}
}

export {
	updateReflection,
	insertNewReflection,
	getReflectionsFromDB,
	deleteReflection,
	loginUser,
	createNewUser,
	logoutUser,
	getUserId
};
