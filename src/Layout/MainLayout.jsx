import React from 'react';
import { Outlet } from 'react-router-dom';
import LoggedOutNav from '../Component/Nav/LoggedOutNav';

const MainLayout = () => {
    return (
        <div>
            <LoggedOutNav></LoggedOutNav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;