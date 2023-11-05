import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import LoggedOutNav from "../Component/Nav/LoggedOutNav";
import LoggedInNav from "../Component/Nav/LoggedInNav";
import { AuthContext } from "../Context/Context";

const MainLayout = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<div >{user ? <LoggedInNav></LoggedInNav> : <LoggedOutNav></LoggedOutNav>} </div>
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;
