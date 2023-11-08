import React from 'react';
import image from  "../../assets/404.gif"


const ErrorPage = () => {
    return (
        <div className='flex justify-between items-center'> 
            <img src={image} className='w-screen h-screen' alt="" />
        </div>
    );
};

export default ErrorPage;