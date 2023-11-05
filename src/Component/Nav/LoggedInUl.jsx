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
					to="/CreateAssignment"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? " active " : ""
					}
				>
					create assignments
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/myAssingment"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? " active " : ""
					}
				>
					my assignments
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/submitedAssingment"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? " active " : ""
					}
				>
					 submitted assignments
				</NavLink>
			</li>
		</>
	);
};

export default LoggedInUl;
