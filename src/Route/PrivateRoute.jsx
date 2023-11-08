import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user ,loading} = useContext(AuthContext)
    const {pathname} = useLocation()

    if(loading){
        
        return <div className='flex justify-center items-center h-screen'>
            <span className="w-20 h-20 loading loading-spinner text-pink"></span>
        </div>
    }


    if (user) {
        return children
    }

    return <Navigate state={pathname} to="/login"></Navigate>
};

export default PrivateRoute;



