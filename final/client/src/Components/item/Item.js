import React, { Component } from "react";
import ItemCard from "./ItemCard";
import furniture from "./../../assets/images/furniture.jpeg";
import cloth from "./../../assets/images/clothes.jpeg";
import mobile from "./../../assets/images/mobile.jpeg";
import cook from "./../../assets/images/cookware1.jpeg";
import plastic from "./../../assets/images/plastic.jpeg";
export default class Item extends Component {
	render() {
		return (
			<div className="item__container">
				<ItemCard
					image={furniture}
					title="Furniture"
					description="Some quick example text to build on the card title and make up the bulk of the card's
              content."
				/>
				<ItemCard
					image={cook}
					title="Broken cookware"
					description="Some quick example text to build on the card title and make up the bulk of the card's
          content."
				/>
				<ItemCard
					image={cloth}
					title="Old clothes"
					description="Some quick example text to build on the card title and make up the bulk of the card's
          content."
				/>
				<ItemCard
					image={mobile}
					title="E-waste"
					description="Some quick example text to build on the card title and make up the bulk of the card's
              content."
				/>
				<ItemCard
					image={plastic}
					title="Plastic"
					description="Some quick example text to build on the card title and make up the bulk of the card's
              content."
				/>
			</div>
		);
	}
}
