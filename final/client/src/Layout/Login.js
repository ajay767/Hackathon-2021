import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "./../util/Axios";
import Cookies from "universal-cookie";

import Icon from "./../util/Icon";
import logo from "./../assets/images/logo.jpeg";

const cookies = new Cookies();
export default function Login(props) {
	const handleFormSubmit = (e) => {
		e.preventDefault();
		const password = e.target.password.value;
		const email = e.target.email.value;

		const myPromise = axios.post("/api/login", {
			email,
			password,
		});

		toast.promise(
			myPromise,
			{
				loading: "Sending..",
				success: (res) => {
					cookies.set("ecosmart", res.data.token);

					props.history.push("/");
					return `success`;
				},
				error: (err) => {
					return `${err.response.data.message}`;
				},
			},
			{
				style: {
					fontSize: "16px",
				},
			}
		);
	};
	return (
		<div className=" signup-form">
			<Toaster position="top-center" />

			<div className="signup-icon">
				<Link to="/go">
					<Icon icon="back-button" />
				</Link>
			</div>
			<img src={logo} alt="waste Eco Smart" />
			<h1>Login to your account</h1>
			<h4>
				we have been waiting for you just sign in and you are ready to go!!!
			</h4>
			<form className="signup-form-container" onSubmit={handleFormSubmit}>
				<div className="signup-form-group">
					<label>Email</label>
					<input type="email" name="email" />
				</div>
				<div className="signup-form-group">
					<label>Password</label>
					<input type="password" name="password" />
				</div>

				<button type="submit">Login</button>
			</form>
			<p>
				By creating an account you agree to our <span>Terms & Privacy</span>.
			</p>
		</div>
	);
}
