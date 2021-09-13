import React from "react";
import CardComponent from "./CardComponent.jsx";
import { useState } from "react";

export const Card = () => {
	const [cards, setCards] = useState([
		{
			title: "Card Title",
			text: "Hola",
			footerText: "Find out More!",
			imgUrl:
				"http://www.directcom.com/images/300x200/Kindle-Fire-200px.gif"
		},
		{
			title: "Card Title",
			text: "Cómo estás?",
			footerText: "Find out More!",
			imgUrl:
				"http://www.directcom.com/images/300x200/Kindle-Fire-200px.gif"
		},
		{
			title: "Card Title",
			text: "Como puedes ver, soy la misma card",
			footerText: "Find out More!",
			imgUrl:
				"http://www.directcom.com/images/300x200/Kindle-Fire-200px.gif"
		},
		{
			title: "Card Title",
			text: "asdasdasdad",
			footerText: "Find out More!",
			imgUrl:
				"http://www.directcom.com/images/300x200/Kindle-Fire-200px.gif"
		}
	]);

	return (
		<div className="row">
			{cards.map((card, index) => {
				return (
					<div key={index} className="col-3">
						<CardComponent
							title={card.title}
							text={card.text}
							footerText={card.footerText}
							imgUrl={card.imgUrl}
						/>
					</div>
				);
			})}
		</div>
	);
};
