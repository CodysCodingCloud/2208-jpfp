import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UnregisterStudent } from "./UnregisterStudent";
import { DeleteStudent } from "./DeleteStudent";
export function StudentRow({ student }) {
	const { pathname } = useLocation();
	return (
		<>
			{student && (
				<tr>
					<td>{student.id}</td>
					<td>
						<Link to={`/students/${student.id}`}>{student.firstName} </Link>
					</td>
					<td>
						<Link to={`/students/${student.id}`}>{student.lastName} </Link>
					</td>
					<td>{student.email}</td>
					{pathname.includes("campuses") && (
						<td>
							<UnregisterStudent student={student} />
						</td>
					)}
					{pathname.includes("student") && (
						<td>
							<DeleteStudent student={student} />
						</td>
					)}
				</tr>
			)}
		</>
	);
}
