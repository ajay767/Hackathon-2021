import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./../Components/Header";
import Item from "./../Components/item/Item";
import Landing from "./../Components/Landing";
export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<ToastContainer style={{ fontSize: "16px" }} />
				<Header />
				<Landing />
				<h3 className="primary__header">Wastecosmart</h3>
				<Item />
			</React.Fragment>
		);
	}
}
