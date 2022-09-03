import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { unregisterStudent } from "../store/campusSlice";
import { DeleteConfirmation } from "./DeleteConfirmation";
export function DeleteStudent({ student }) {
	const [deleteToggle, setDeleteToggle] = React.useState(false);

	const handleDeleteToggle = () => {
		setDeleteToggle(!deleteToggle);
	};
	return (
		<>
			{deleteToggle && (
				<DeleteConfirmation
					handleDeleteToggle={handleDeleteToggle}
					objToBeRemoved={student}
					modelName="students"
				/>
			)}
			<button onClick={handleDeleteToggle} className="deleteBtn">
				X
			</button>
		</>
	);
}
