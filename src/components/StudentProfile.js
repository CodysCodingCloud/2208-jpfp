import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentProfile } from "../store/studentSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function StudentProfile() {
	const dispatch = useDispatch();
	const { id } = useParams();
	React.useEffect(() => {
		dispatch(fetchStudentProfile(id));
	}, []);

	let studentProfile = useSelector(
		(state) => state.student.currentStudentProfile
	);
	return (
		<>
			{studentProfile && (
				<div className="studentProfile">
					<h1>Student Profile</h1>
					<img src={studentProfile.imageUrl} alt={"profile image"}></img>
					<h3>Given Name: {studentProfile.firstName}</h3>
					<h3>Family Name: {studentProfile.lastName}</h3>
					<p>
						Currently Attending:{" "}
						<Link to={`/campuses/${studentProfile.campus.id}`}>
							{studentProfile.campus.name}
						</Link>
					</p>
					<p>GPA: {studentProfile.gpa}</p>
				</div>
			)}
		</>
	);
}
