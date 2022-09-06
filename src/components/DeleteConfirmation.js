import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { removeStudentData } from "../store/studentSlice";
import { removeCampusData } from "../store/campusSlice";
export function DeleteConfirmation({
	handleDeleteToggle,
	objToBeRemoved,
	modelName,
}) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const handleDelete = () => {
		if (modelName === "students") {
			dispatch(removeStudentData(objToBeRemoved, navigate));
		} else if (modelName === "campuses") {
			dispatch(removeCampusData(objToBeRemoved, navigate));
		}
	};
	return (
		<div className="deletePopUp">
			<div>
				{modelName === "students" ? (
					<p>Are you sure you want to disenroll this student?</p>
				) : modelName === "campuses" ? (
					<p>Are you sure you want to remove this campus?</p>
				) : (
					<p>I am not sure what you are trying to delete</p>
				)}
				<div className="multiBtn">
					<button onClick={handleDelete}>Yes</button>
					<button onClick={handleDeleteToggle}>Cancel</button>
				</div>
			</div>
		</div>
	);
}
