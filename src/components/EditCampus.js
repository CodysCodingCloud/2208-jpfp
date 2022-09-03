import React from "react";
import { useDispatch } from "react-redux";
import { updateCampusData } from "../store/campusSlice";

export const EditCampus = ({ campusData, toggleEditButton }) => {
	const [item, setItem] = React.useState(campusData);

	const dispatch = useDispatch();
	const handleChange = (event) => {
		let target = event.target.name;
		let value = event.target.value;
		setItem({ ...item, [target]: value });
		console.log(item);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (item.name.length > 0 && item.address.length > 0) {
			dispatch(updateCampusData(item));
			toggleEditButton();
		}
	};
	return (
		<form className="campusForm">
			<h3>Update Campus</h3>
			<label>
				Campus Name:
				<input
					name="name"
					type="text"
					value={item.name}
					onChange={(e) => handleChange(e)}
				></input>
			</label>
			<label>
				address:
				<input
					name="address"
					type="text"
					value={item.address}
					onChange={(e) => handleChange(e)}
				></input>
			</label>
			<label>
				imageUrl:
				<input
					name="imageUrl"
					type="text"
					value={
						item.imageUrl == "/placeholder-company.png" ? "" : item.imageUrl
					}
					placeholder="optional"
					onChange={(e) => handleChange(e)}
				></input>
			</label>
			<label htmlFor="description">Campus description:</label>
			<textarea
				name="description"
				value={item.description}
				onChange={(e) => handleChange(e)}
				className="largeInput"
			></textarea>
			<br />
			<button onClick={(e) => handleSubmit(e)}>Submit Update</button>
			<button onClick={toggleEditButton}>Cancel</button>
		</form>
	);
};
