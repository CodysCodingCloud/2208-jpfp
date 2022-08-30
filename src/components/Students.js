import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../store/studentSlice";
import { StudentTable } from "./StudentTable";
export function Students() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchStudents());
	}, []);

	let studentList = useSelector((state) => state.student.studentList);
	return (
		<>
			<h1>Our Students at ACME</h1>
			<StudentTable studentList={studentList} />
		</>
	);
}
