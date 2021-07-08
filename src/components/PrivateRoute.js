// function PrivateRoute() {
//     return (

// )}

// -----------------------------------------------
// Imports
import * as React from 'react';
// Util
import { navigate } from 'gatsby';
import { authStateListener } from '../util/firebaseUtil';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
	console.log('Inside PrivateRoute');
	// if (authStateListener() === null) {
	// 	console.log('GOing to navigate to index');
	// 	navigate('/');
	// 	return null;
	// }

	return <Component {...rest} />;
};

export default PrivateRoute;
