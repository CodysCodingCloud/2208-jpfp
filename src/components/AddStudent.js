import React from "react";
import { useDispatch } from "react-redux";
import { addStudentData } from "../store/studentSlice";
export const AddStudent = ({ setToggleAdd, toggleAdd }) => {
	const [item, setItem] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		imageUrl: "",
	});

	const dispatch = useDispatch();
	const handleChange = (event) => {
		let target = event.target.name;
		let value = event.target.value;
		setItem({ ...item, [target]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			item.firstName.length > 0 &&
			item.lastName.length > 0 &&
			item.email.length > 0
		) {
			if (item.imageUrl.length === 0) {
				delete item.imageUrl;
			}
			console.log(item);
			dispatch(addStudentData(item));
			setItem({
				firstName: "",
				lastName: "",
				email: "",
				imageUrl: "",
			});
			setToggleAdd(!toggleAdd);
		}
	};
	return (
		<form className="studentForm">
			<h3>Enrollment Form</h3>
			<label>
				First Name:
				<input
					name="firstName"
					type="text"
					value={item.firstName}
					onChange={(e) => handleChange(e)}
				></input>
			</label>
			<label>
				Last Name:
				<input
					name="lastName"
					type="text"
					value={item.lastName}
					onChange={(e) => handleChange(e)}
				></input>
			</label>
			<label>
				email:
				<input
					name="email"
					type="text"
					value={item.email}
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
			<button onClick={(e) => handleSubmit(e)}>Enroll</button>
		</form>
	);
};
