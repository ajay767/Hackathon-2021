import React from "react";

import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.jpeg";
import Icon from "./../util/Icon";
import axios from "./../util/Axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Signup = (props) => {
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const password = e.target.password.value;
		const email = e.target.email.value;
		const confirmPassword = e.target.confirmPassword.value;

		const myPromise = axios.post("/api/signup", {
			email,
			name,
			password,
			confirmPassword,
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
			<h1>Welcome</h1>
			<h4>
				we have been waiting for you just sign in and you are ready to go!!!
			</h4>
			<form className="signup-form-container" onSubmit={handleFormSubmit}>
				<div className="signup-form-group">
					<label>Name</label>
					<input type="name" name="name" />
				</div>
				<div className="signup-form-group">
					<label>Email</label>
					<input type="email" name="email" />
				</div>
				<div className="signup-form-group">
					<label>Password</label>
					<input type="password" name="password" />
				</div>
				<div className="signup-form-group">
					<label>Confirm password</label>
					<input type="text" name="confirmPassword" />
				</div>
				<button type="submit">Signup</button>
			</form>
			<p>
				By creating an account you agree to our <span>Terms & Privacy</span>.
			</p>
		</div>
	);
};
export default Signup;
