import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
const Navigation = () => {
	const handleActive = ({ isActive }) => (isActive ? "activeLink" : "");
	return (
		<nav>
			<NavLink to="/" className={handleActive}>
				Home
			</NavLink>
			<NavLink to="students" className={handleActive}>
				Students
			</NavLink>
			<NavLink to="campuses" className={handleActive}>
				Campuses
			</NavLink>
		</nav>
	);
};

export default Navigation;
