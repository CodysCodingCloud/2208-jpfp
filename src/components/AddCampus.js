import React from "react";
import { useDispatch } from "react-redux";
import { addCampusData } from "../store/campusSlice";
export const AddCampus = ({ cancelAddButton }) => {
	const [item, setItem] = React.useState({
		name: "",
		address: "",
		description: "",
		imageUrl: "",
	});

	const dispatch = useDispatch();
	// const navigate = useNavigate()
	const handleChange = (event) => {
		let target = event.target.name;
		let value = event.target.value;
		setItem({ ...item, [target]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (item.name.length > 0) {
			if (item.imageUrl.length === 0) {
				delete item.imageUrl;
			}
			dispatch(addCampusData(item));
			setItem({
				name: "",
				address: "",
				description: "",
				imageUrl: "",
			});
		}
	};
	return (
		<form className="campusForm">
			<h3>New Campus Form</h3>
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
					value={item.imageUrl}
					placeholder="optional"
					onChange={(e) => handleChange(e)}
				></input>
			</label>
			<label htmlFor="description">Campus description:</label>
			<input
				name="description"
				type="text"
				value={item.description}
				onChange={(e) => handleChange(e)}
				className="largeInput"
			></input>
			<br />
			<button onClick={(e) => handleSubmit(e)}>Add Campus</button>
			<button onClick={cancelAddButton}>Cancel</button>
		</form>
	);
};
