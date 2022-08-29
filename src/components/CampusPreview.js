import React from "react";
export function CampusPreview({ campus }) {
	return (
		<div className="campusItem">
			<h3>{campus.name}</h3>
			<img src={campus.imageUrl} alt={`${campus.name} image`} />
			<p>{campus.description}</p>
		</div>
	);
}
