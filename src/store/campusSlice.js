import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const campusSlice = createSlice({
	name: "campusList",
	initialState: {},
	reducers: {
		getCampusList: (state, action) => {
			state.campusList = action.payload;
			return state;
		},
		addCampus: (state, action) => {
			state.campusList.push(action.payload);
			return state;
		},
		getCampus: (state, action) => {
			state.campusData = action.payload;
			return state;
		},
		removeCampus: (state, action) => {
			state.campusList = state.campusList.filter(
				(campus) => campus.id != action.payload.id
			);
			return state;
		},
		_unregisterStudent: (state, action) => {
			state.campusData.students = state.campusData.students.filter(
				(student) => student.id !== action.payload.id
			);
			return state;
		},
		setErrorMsg: (state, action) => {
			state.errorMsg = action.payload;
			return state;
		},
	},
});
export default campusSlice.reducer;
export const {
	getCampusList,
	addCampus,
	getCampus,
	removeCampus,
	_unregisterStudent,
} = campusSlice.actions;
export const fetchCampuses = () => async (dispatch) => {
	const { data: campusList } = await axios.get("/api/campuses");
	dispatch(getCampusList(campusList));
};

export const fetchCampusData = (campusId) => async (dispatch) => {
	const { data: campusData } = await axios.get(`/api/campuses/${campusId}`);
	dispatch(getCampus(campusData));
};
export const addCampusData = (newCampusData) => async (dispatch) => {
	try {
		const { data: newData } = await axios.post("/api/campuses", newCampusData);
		dispatch(addCampus(newData));
	} catch (error) {
		dispatch(setErrorMsg(error.response.data));
	}
};
export const removeCampusData = (campusData, navigate) => async (dispatch) => {
	const { data: deletedCampus } = await axios.delete(
		`/api/campuses/${campusData.id}`
	);
	dispatch(removeCampus(deletedCampus));
	navigate("/campuses");
};
export const updateCampusData = (updatedcampus) => async (dispatch) => {
	const { data: updatedCampusData } = await axios.put(
		`/api/campuses/${updatedcampus.id}`,
		updatedcampus
	);
	dispatch(getCampus(updatedCampusData));
};
export const unregisterStudent =
	(updatedStudentProfile) => async (dispatch) => {
		console.log("nu;;?", updatedStudentProfile);
		const { data: updatedStudent } = await axios.put(
			`/api/students/${updatedStudentProfile.id}`,
			updatedStudentProfile
		);
		dispatch(_unregisterStudent(updatedStudent));
	};
