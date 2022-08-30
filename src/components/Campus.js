import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampusData } from "../store/campusSlice";
import { useParams } from "react-router-dom";
import { StudentTable } from "./StudentTable";

export function Campus() {
	let { id } = useParams();
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchCampusData(id));
	}, []);

	let campusData = useSelector((state) => state.campus.campusData);
	return (
		<div className="campusItem">
			{campusData && (
				<>
					<h3>{campusData.name}</h3>
					<img src={campusData.imageUrl} alt={`${campusData.name} image`} />
					<p>{campusData.description}</p>
					<StudentTable studentList={campusData.students} />
				</>
			)}
		</div>
	);
}
