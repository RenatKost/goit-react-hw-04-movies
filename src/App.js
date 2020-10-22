import React, { Component, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
//--------------------------------------------------
import "./App.css";
import Header from "./components/header/Header";
//---Синхронный импорт
//import HomePage from "./pages/homePage/HomePage";
//import ElementList from "./components/cardPage/ElementList";
//import SearchForm from "./pages/searchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
const AsyncHome = lazy(() =>
	import("./pages/homePage/HomePage" /* webpackChunkName: "home-page" */)
);
const AsyncElementList = lazy(() =>
	import(
		"./components/cardPage/ElementList" /* webpackChunkName: "ElementList-page" */
	)
);
const AsyncSearchForm = lazy(() =>
	import(
		"./pages/searchPage/SearchPage" /* webpackChunkName: "Search-page" */
	)
);

export default class App extends Component {
	state = {};

	render() {
		return (
			<div className="App">
				<Header />
				<Suspense
					fallback={
						<div className={"loader"}>Please wait Loading...</div>
					}
				>
					<Switch>
						<Route path="/" exact component={AsyncHome} />
						<Route
							path="/movies/:movieId"
							component={AsyncElementList}
						/>
						<Route path="/movies" component={AsyncSearchForm} />
						<Route component={NotFoundPage} />
					</Switch>
				</Suspense>
			</div>
		);
	}
}
