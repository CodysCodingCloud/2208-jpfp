import React from "react";
import { Link } from "react-router-dom";
import { DeleteConfirmation } from "./DeleteConfirmation";

export function CampusPreview({ campus }) {
	const [deleteToggle, setDeleteToggle] = React.useState(false);
	const handleDeleteToggle = () => {
		setDeleteToggle(!deleteToggle);
	};
	return (
		<div className="campusItem">
			<Link to={`${campus.id}`}>
				<h3>{campus.name}</h3>
			</Link>

			<img src={campus.imageUrl} alt={`${campus.name} image`} />
			<p>{campus.description}</p>
			{deleteToggle ? (
				<DeleteConfirmation
					handleDeleteToggle={handleDeleteToggle}
					objToBeRemoved={campus}
					modelName="campuses"
				/>
			) : (
				<button onClick={handleDeleteToggle} className="deleteBtn">
					X
				</button>
			)}
		</div>
	);
}
