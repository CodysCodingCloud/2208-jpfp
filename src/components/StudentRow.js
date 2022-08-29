import React from "react";

export function StudentRow({ student }) {
	return (
		<>
			{student && (
				<tr>
					<td>{student.id}</td>
					<td>{student.firstName}</td>
					<td>{student.lastName}</td>
					<td>{student.email}</td>
				</tr>
			)}
		</>
	);
}
