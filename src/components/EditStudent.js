import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentData } from "../store/studentSlice";
import { fetchCampuses } from "../store/campusSlice";

export const EditStudent = ({ editToggle, setEditToggle, studentProfile }) => {
	const [item, setItem] = React.useState(studentProfile);
	const dispatch = useDispatch();
	const handleChange = (event) => {
		let target = event.target.name;
		let value = event.target.value;
		setItem({ ...item, [target]: value });
	};
	React.useEffect(() => {
		dispatch(fetchCampuses());
	}, []);
	let campusesList = useSelector((state) => state.campus.campusList);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			item.firstName.length > 0 &&
			item.lastName.length > 0 &&
			item.email.length > 0 &&
			(item.gpa == "" || (item.gpa <= 4 && item.gpa >= 0))
		) {
			if (item.imageUrl.length === 0) {
				delete item.imageUrl;
			}
			if (item.gpa) {
				item.gpa = Number(item.gpa).toFixed(1);
			}
			if (item.gpa == "") {
				delete item.gpa;
			}
			if (item.campusId) {
				item.campusId = Number(item.campusId);
			}
			dispatch(updateStudentData(item));
			setEditToggle(!editToggle);
		}
	};
	return (
		<form className="studentForm">
			<h3>Modify Student</h3>
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
				Campus:
				{campusesList && (
					<select
						name="campusId"
						defaultValue={studentProfile.campusId}
						onChange={(e) => handleChange(e)}
					>
						<option disabled hidden>
							Select One
						</option>
						{campusesList.map((campus) => (
							<option value={campus.id} key={campus.id}>
								{campus.name}
							</option>
						))}
					</select>
				)}
			</label>
			<label>
				imageUrl:
				<input
					name="imageUrl"
					type="text"
					value={
						item.imageUrl === "/placeholder-portrait.png" ? "" : item.imageUrl
					}
					placeholder="optional"
					onChange={(e) => handleChange(e)}
				></input>
			</label>
			<label>
				GPA:
				<input
					name="gpa"
					type="number"
					value={item.gpa || ""}
					placeholder="0-4"
					onChange={(e) => handleChange(e)}
					min="0"
					max="4"
				></input>
			</label>
			<button onClick={(e) => handleSubmit(e)}>Submit Modification</button>
			<button onClick={() => setEditToggle(!editToggle)}>Cancel</button>
		</form>
	);
};
