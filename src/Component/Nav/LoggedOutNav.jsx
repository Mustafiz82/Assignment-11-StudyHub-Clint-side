import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const LoggedOutNav = () => {
	return (
		<div>
			<div className="navbar px-0 md:px-5 bg-base-100">
				<div className="flex-1">
					<div className="flex  items-center">
						<img src={logo} alt="" className="w-10 h-10 " />
						<Link
							to="/"
							className="normal-case text-xl"
						>
							StudyHub
						</Link>
					</div>{" "}
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal p-0 m-0">
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
