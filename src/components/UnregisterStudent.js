import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { unregisterStudent } from "../store/campusSlice";

export function UnregisterStudent({ student }) {
	const dispatch = useDispatch();
	const handleUnregister = (e) => {
		dispatch(unregisterStudent({ id: student.id, campusId: null }));
	};
	return <button onClick={(e) => handleUnregister(e)}>Unregister</button>;
}
