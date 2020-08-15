import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";

const BooksApp = () => (
	<div>
		<Route exact path="/" component={MainPage} />
		<Route exact path="/search" component={SearchPage} />
	</div>
)

export default BooksApp
