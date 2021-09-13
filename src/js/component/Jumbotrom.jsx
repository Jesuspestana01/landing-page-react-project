import React from "react";

export const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pellentesque ex elit, pharetra ac congue in, pulvinar sed
					tellus. Donec maximus.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</div>
		</div>
	);
};
