import React, { Component } from "react";

import Header from "./../Components/Header";
import user from "./../assets/images/user.svg";
import Cookie from "universal-cookie";
import { ToastContainer } from "react-toastify";

import axios from "./../util/Axios";

const cookies = new Cookie();
export default class User extends Component {
	state = {
		user: {},
	};
	async fetchUserData() {
		const curr = await axios.get("/api/me", {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${cookies.get("ecosmart")}`,
			},
		});
		this.setState({
			user: curr.data.user,
		});
		cookies.set("userEmail", curr.data.user.email);
	}
	componentDidMount() {
		if (cookies.get("ecosmart")) {
			this.fetchUserData();
		} else this.props.history.push("/");
	}
	render() {
		return (
			<div>
				<ToastContainer style={{ fontSize: "16px" }} />
				<Header />
				<h3 className="primary__header">{`Welcome ${this.state.user.name}`}</h3>
				<div className="container user__container">
					<div className="user__container__profile">
						<img
							className="user__container__profile-icon"
							alt="user"
							src={user}
						/>
						<h4 className="name">{this.state.user.name}</h4>
						<h4 className="email">{this.state.user.email}</h4>
					</div>
					<div className="user__container__coin">
						<h4>
							Coins <span>{this.state.user.coin}</span>
						</h4>
					</div>
				</div>
			</div>
		);
	}
}
