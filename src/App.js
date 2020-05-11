import React from "react";

import './App.scss';
import Login from "./components/Login";
import NoTask from "./components/NoTask";
import NewTask from "./components/NewTask";
import Dashboard from "./components/Dashboard";
import { useRoutes, useInterceptor } from "hookrouter";
import NotFound from "./components/NotFound";

const routes = {
	'/': () => <Login />,
	'/notask': () => <NoTask />,
	'/newtask': () => <NewTask />,
	'/dashboard': () => <Dashboard />
};

export default function App() {

	const routeResult = useRoutes(routes);

	return (
		<div className="app-container">
			{routeResult || <NotFound />}
		</div>
	);
}