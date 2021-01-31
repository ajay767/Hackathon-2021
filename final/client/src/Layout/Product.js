import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";

import axios from "./../util/Axios";
import Cookies from "universal-cookie";

import "./../style/pages/product.css";
const cookies = new Cookies();
export default class Product extends Component {
	async handleFormSubmit(e) {
		e.preventDefault();
		const productName = e.target.productName.value;
		const address = e.target.address.value;
		const phone = e.target.phone.value;
		const wasteType = e.target.wasteType.value;
		const old = e.target.ageOfProduct.value;
		console.log(productName, address, phone, wasteType, old);
		const myPromise = axios.post(
			"/api/product",
			{
				name: productName,
				mobile: phone,
				address: address,
				category: wasteType,
				age: old,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${cookies.get("ecosmart")}`,
				},
			}
		);

		toast.promise(
			myPromise,
			{
				loading: "Sending..",
				success: (res) => {
					console.log(res.data);

					return `Thank you for selling your waste with us`;
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
	}
	render() {
		return (
			<div className="container">
				<Toaster position="top-center" />
				<div className="form-style-5">
					<form onSubmit={this.handleFormSubmit}>
						<fieldset>
							<legend>
								<span className="number">1</span>product information
							</legend>
							<input
								type="text"
								name="productName"
								placeholder="Product Name *"
							/>
							<input type="number" name="phone" placeholder="phone number *" />
							<input
								type="number"
								name="ageOfProduct"
								placeholder="how old is your product"
							/>
							<label htmlFor="waste-type">waste-type</label>
							<select id="waste-type" name="wasteType">
								<optgroup label="e-waste">
									<option value="laptop">laptop/pc</option>
									<option value="mobile">mobile</option>
									<option value="speaker">speaker</option>
									<option value="other">other</option>
								</optgroup>
								<optgroup label="wooden items">
									<option value="furniture">furniture</option>
									<option value="other">other</option>
								</optgroup>
								<optgroup label="plastic">
									<option value="plastic">plastic</option>
								</optgroup>
								<optgroup label="cookware">
									<option value="cookware">broken cookware</option>
								</optgroup>
								<optgroup label="old clothes">
									<option value="for kids">for kids</option>
									<option value="for adults">for adults</option>
									<option value="other">other</option>
								</optgroup>
							</select>
						</fieldset>
						<fieldset>
							<legend>
								<span className="number">2</span> address
							</legend>
							<textarea name="address" placeholder="..." defaultValue={""} />
						</fieldset>
						<input type="submit" defaultValue="submit product details" />
					</form>
				</div>
			</div>
		);
	}
}
