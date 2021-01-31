import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

import SwiperCore, { Autoplay } from "swiper";
export default class Landing extends Component {
	render() {
		SwiperCore.use([Autoplay]);
		return (
			<Swiper
				className="landing__swipper"
				autoplay={{ delay: 3000 }}
				spaceBetween={1}
				slidesPerView={1}
			>
				<SwiperSlide className="landing__swipper--item">
					<img
						src="https://source.unsplash.com/1000x250/?electronic,devices"
						alt="landing"
					/>
				</SwiperSlide>
				<SwiperSlide className="landing__swipper--item">
					<img
						src="https://source.unsplash.com/1000x250/?broken,cookware"
						alt="landing"
					/>
				</SwiperSlide>
				<SwiperSlide className="landing__swipper--item">
					<img
						src="https://source.unsplash.com/1000x250/?clothes"
						alt="landing"
					/>
				</SwiperSlide>
				<SwiperSlide className="landing__swipper--item">
					<img
						src="https://source.unsplash.com/1000x250/?plastic,waste"
						alt="landing"
					/>
				</SwiperSlide>
			</Swiper>
		);
	}
}
