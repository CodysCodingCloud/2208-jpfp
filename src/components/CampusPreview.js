import React from "react";
import { Link } from "react-router-dom";

export function CampusPreview({ campus }) {
	return (
		<div className="campusItem">
			<Link to={`${campus.id}`}>
				<h3>{campus.name}</h3>
			</Link>
			<img src={campus.imageUrl} alt={`${campus.name} image`} />
			<p>{campus.description}</p>
		</div>
	);
}
