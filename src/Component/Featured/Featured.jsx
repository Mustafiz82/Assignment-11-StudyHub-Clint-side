import React, { useEffect, useState } from "react";
import loadingImage from "../../assets/loading.gif";
import noData from "../../assets/no-result.gif";
import axios from "axios";
import Assignmentcard from "../../Pages/assignments/Assignmentcard";


const Featured = () => {

    const [loading , setLoading] = useState(true)
    const [data , setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5100/featured")
        .then(res => {
            setData(res.data)
            setLoading(false)
            
        })

    } ,[])

	if (loading) {
		return (
			<div className="h-screen w-screen flex justify-center items-center -mt-10">
				<img src={loadingImage} alt="" />
			</div>
		);
	}

    if(data.length == 0 ){
        return <div className="h-screen w-screen flex justify-center items-center -mt-10">
				<img src={noData} alt="" />
			</div>
    }

    console.log(data);


    return (
        <div>
            <h1 className='text-4xl font-semibold my-10 text-center'>Featured Assignment</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                data.map(item => <Assignmentcard key={item._id} item={item}></Assignmentcard>)
            }
            </div>

        </div>
    );
};

export default Featured;