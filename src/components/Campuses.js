import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampuses } from "../store/campusSlice";
import { CampusPreview } from "./CampusPreview";
import { AddCampus } from "./AddCampus";
export function Campuses() {
	const dispatch = useDispatch();
	const [toggleAdd, setToggleAdd] = React.useState(false);

	React.useEffect(() => {
		dispatch(fetchCampuses());
	}, []);

	let campusesList = useSelector((state) => state.campus.campusList);
	const toggleAddButton = () => {
		setToggleAdd(!toggleAdd);
	};

	return (
		<>
			<div className="campus-List">
				<h1>Our Campuses</h1>
				{campusesList &&
					campusesList.map((campus) => (
						<CampusPreview key={campus.id} campus={campus} />
					))}
			</div>
			<button onClick={toggleAddButton}>Contract a new school</button>
			{toggleAdd && (
				<AddCampus toggleAdd={toggleAdd} setToggleAdd={setToggleAdd} />
			)}
		</>
	);
}
