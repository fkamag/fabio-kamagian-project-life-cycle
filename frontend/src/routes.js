import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import StudentDataProject from './pages/StudentDataProject';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/student/data/project" exact component={StudentDataProject}></Route>
			</Switch>
		</BrowserRouter>
	);
}