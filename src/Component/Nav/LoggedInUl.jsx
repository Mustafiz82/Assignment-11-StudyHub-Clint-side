import React from "react";
import { NavLink } from "react-router-dom";

const LoggedInUl = () => {
	return (
		<>
			<li>
				<NavLink
					to="/assignments"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? " active " : ""
					}
				>
					Assignments
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/login"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? " active " : ""
					}
				>
					create assignments
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/Regestration"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? " active " : ""
					}
				>
					my assignments
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/Regestration"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? " active " : ""
					}
				>
					my assignments
				</NavLink>
			</li>
		</>
	);
};

export default LoggedInUl;
