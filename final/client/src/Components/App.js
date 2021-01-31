import React, { Component } from "react";
import Signup from "./../Layout/Signup";
import Home from "./../Layout/Home";
import User from "./../Layout/User";
import Product from "./../Layout/Product";
import Login from "./../Layout/Login";
import { Route, Switch, Redirect } from "react-router-dom";
export default class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/me" component={User} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/sell" component={Product} />
				<Redirect from="/" to="/" />
			</Switch>
		);
	}
}
