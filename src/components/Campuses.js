import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampuses } from "../store/campusSlice";
import { CampusPreview } from "./CampusPreview";

export function Campuses() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchCampuses());
	}, []);

	let campusesList = useSelector((state) => state.campus.campusList);

	return (
		<div className="campus-List">
			<h1>Our Campuses</h1>
			{campusesList &&
				campusesList.map((campus) => (
					<CampusPreview key={campus.id} campus={campus} />
				))}
		</div>
	);
}
