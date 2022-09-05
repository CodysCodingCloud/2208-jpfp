import React from "react";
import { StudentRow } from "./StudentRow";

export function StudentTable({ studentList }) {
	return (
		<>
			{studentList ? (
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
			) : (
				<h3>No students are enrolled</h3>
			)}
		</>
	);
}
