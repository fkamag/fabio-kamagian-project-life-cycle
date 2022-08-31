import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RegisterProject from './pages/RegisterProject';
import StudentDataProject from './pages/StudentDataProject';
import StudentList from './pages/StudentList';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/student/data/project" exact component={StudentDataProject}></Route>
				<Route path="/project/new/" exact component={RegisterProject}></Route>
				<Route path="/student/class" exact component={StudentList}></Route>
			</Switch>
		</BrowserRouter>
	);
}