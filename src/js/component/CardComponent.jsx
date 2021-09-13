import React from "react";
import PropType from "prop-types";

const CardComponent = props => {
	return (
		<div className="card">
			<img src={props.imgUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
			</div>
			<div className="card-footer">
				<a href="#" className="btn btn-primary">
					{props.footerText}
				</a>
			</div>
		</div>
	);
};

CardComponent.propTypes = {
	title: PropType.string,
	text: PropType.string,
	footerText: PropType.string,
	imgUrl: PropType.string
};

export default CardComponent;
