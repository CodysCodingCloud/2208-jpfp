import React from "react";
import { StudentRow } from "./StudentRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../store/studentSlice";

export function Students() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchStudents());
	}, []);

	let studentList = useSelector((state) => state.studentList);

	return (
		<div className="roster">
			<h1>Student Roster</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>e-mail</th>
					</tr>
				</thead>
				<tbody>
					{studentList.map((student) => (
						<StudentRow key={student.id} student={student} />
					))}
				</tbody>
			</table>
		</div>
	);
}
