import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const studentSlice = createSlice({
	name: "studentList",
	initialState: {},
	reducers: {
		getStudents: (state, action) => {
			state.studentList = action.payload;
			return state;
		},
		addStudent: (state, action) => {
			state.studentList.push(action.payload);
			return state;
		},
		getStudentProfile: (state, action) => {
			state.currentStudentProfile = action.payload;
			return state;
		},
		removeStudent: (state, action) => {
			state.studentList = state.studentList.filter(
				(student) => student.id != action.payload.id
			);
			return state;
		},
	},
});
export default studentSlice.reducer;
export const { getStudents, addStudent, getStudentProfile, removeStudent } =
	studentSlice.actions;
export const fetchStudents = () => async (dispatch) => {
	const { data: students } = await axios.get("/api/students");
	dispatch(getStudents(students));
};
export const fetchStudentProfile = (studentId) => async (dispatch) => {
	const { data: studentProfile } = await axios.get(
		`/api/students/${studentId}`
	);
	dispatch(getStudentProfile(studentProfile));
};
export const addStudentData = (newStudentData) => async (dispatch) => {
	try {
		const { data: newData } = await axios.post("/api/students", newStudentData);
		dispatch(addStudent(newData));
	} catch (error) {
		return error.response.data.errors[0].message;
	}
};
export const removeStudentData =
	(studentProfile, navigate) => async (dispatch) => {
		const { data: deletedStudent } = await axios.delete(
			`/api/students/${studentProfile.id}`
		);
		dispatch(removeStudent(deletedStudent));
		navigate("/students");
	};
export const updateStudentData =
	(updatedStudentProfile) => async (dispatch) => {
		const { data: updatedStudent } = await axios.put(
			`/api/students/${updatedStudentProfile.id}`,
			updatedStudentProfile
		);
		dispatch(getStudentProfile(updatedStudent));
	};
