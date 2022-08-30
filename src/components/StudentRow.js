import React from "react";
import { Link } from "react-router-dom";

export function StudentRow({ student }) {
	return (
		<>
			{student && (
				<tr>
					<td>{student.id}</td>
					<td>{student.firstName}</td>
					<td>{student.lastName}</td>
					<td>{student.email}</td>
					<td>
						<button>
							<Link to={`/students/${student.id}`}>Profile</Link>
						</button>
					</td>
				</tr>
			)}
		</>
	);
}
