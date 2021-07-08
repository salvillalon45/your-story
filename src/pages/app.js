import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import DashboardPageContent from '../components/DashboardPageContent';
import IndexPageContent from '../components/IndexPageContent';
import PrivateRoute from '../components/PrivateRoute';

const App = () => (
	<Layout>
		<Router>
			<PrivateRoute path='/dashboard' component={DashboardPageContent} />
			<IndexPageContent path='/' />
		</Router>
	</Layout>
);

export default App;
