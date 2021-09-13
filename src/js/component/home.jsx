import React from "react";
import { Jumbotron } from "./Jumbotrom.jsx";
import { Navbar } from "./NavBar.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
