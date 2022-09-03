import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentProfile } from "../store/studentSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { EditStudent } from "./EditStudent";

export function StudentProfile() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [deleteToggle, setDeleteToggle] = React.useState(false);
	const [editToggle, setEditToggle] = React.useState(false);

	React.useEffect(() => {
		dispatch(fetchStudentProfile(id));
	}, []);

	let studentProfile = useSelector(
		(state) => state.student.currentStudentProfile
	);
	const handleDeleteToggle = () => {
		setDeleteToggle(!deleteToggle);
	};

	return (
		<>
			{studentProfile && (
				<div className="studentProfile">
					<h1>Student Profile</h1>
					{editToggle ? (
						<EditStudent
							editToggle={editToggle}
							setEditToggle={setEditToggle}
							studentProfile={studentProfile}
						/>
					) : (
						<>
							<img src={studentProfile.imageUrl} alt={"profile image"}></img>
							<h3>Given Name: {studentProfile.firstName}</h3>
							<h3>Family Name: {studentProfile.lastName}</h3>
							<p>
								{studentProfile.campus ? (
									<>
										Currently Attending:
										<Link to={`/campuses/${studentProfile.campus.id}`}>
											{studentProfile.campus.name}
										</Link>
									</>
								) : (
									"Currently not enolled in a campus"
								)}
							</p>
							<p>GPA: {studentProfile.gpa || "N/A"}</p>
							<button onClick={() => setEditToggle(!editToggle)}>Modify</button>
						</>
					)}

					{deleteToggle ? (
						<DeleteConfirmation
							handleDeleteToggle={handleDeleteToggle}
							objToBeRemoved={studentProfile}
							modelName="students"
						/>
					) : (
						<button onClick={handleDeleteToggle} className="deleteBtn">
							Disenroll
						</button>
					)}
				</div>
			)}
		</>
	);
}
