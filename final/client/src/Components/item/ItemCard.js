import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ItemCard extends Component {
	render() {
		return (
			<div className="item__card">
				<img src={this.props.image} alt={this.props.title} />
				<div className="item__card-content">
					<h3>{this.props.title}</h3>
					<p>{this.props.description} </p>
					<Link to="/sell">sell</Link>
				</div>
			</div>
		);
	}
}
