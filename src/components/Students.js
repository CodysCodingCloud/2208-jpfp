import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../store/studentSlice";
import { AddStudent } from "./AddStudent";
import { StudentTable } from "./StudentTable";
export function Students() {
	const [toggleAdd, setToggleAdd] = React.useState(false);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchStudents());
	}, []);
	const toggleAddButton = () => {
		setToggleAdd(!toggleAdd);
	};

	let studentList = useSelector((state) => state.student.studentList);
	return (
		<>
			<h1>Our Students at ACME</h1>
			<button onClick={toggleAddButton}>Enroll a new student</button>
			{toggleAdd && (
				<AddStudent toggleAdd={toggleAdd} setToggleAdd={setToggleAdd} />
			)}
			<StudentTable studentList={studentList} />
		</>
	);
}
