import React from 'react';
import { Outlet } from 'react-router-dom';
import LoggedOutNav from '../Component/Nav/LoggedOutNav';
import LoggedInNav from '../Component/Nav/LoggedInNav';

const MainLayout = () => {
    return (
        <div>
            <LoggedOutNav></LoggedOutNav>
            {/* <LoggedInNav></LoggedInNav> */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;