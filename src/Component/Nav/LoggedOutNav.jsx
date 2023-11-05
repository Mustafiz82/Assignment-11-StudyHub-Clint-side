import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const LoggedOutNav = () => {
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<div>
						<Link
							to="/"
							className="btn btn-ghost normal-case text-xl"
						>
							<img src={logo} alt="" className="w-10 h-10 " />
							StudyHub
						</Link>
					</div>{" "}
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li>
							<NavLink
								to="/assignments"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "  bg-primary text-white"
										: ""
								}
							>
								Assignments
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/login"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? " active bg-primary text-white"
										: ""
								}
							>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/Regestration"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? " active bg-primary text-white"
										: ""
								}
							>
								Registreation
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LoggedOutNav;
