import React, { useContext, useEffect, useState } from "react";
import loadingImage from "../../assets/loading.gif";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import noData from "../../assets/no-result.gif";
import { AuthContext } from "../../Context/Context";


const MyAssingments = () => { 


    const [loading , setLoading] = useState(true)
    const [data , setData] = useState([])
    const {user} = useContext(AuthContext)
    const email = user?.email
    console.log(email);

    useEffect(() => {
        if (email) {
          axios.get(`http://localhost:5100/mySubmittedAssignments?userEmail=${email}`)
            .then((res) => {
              setData(res.data);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error loading data:", error);
              setLoading(false); // Make sure to set loading to false in case of an error.
            });
        }
      }, [email]);

    console.log(data);

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


    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-10'>Get All your submitted Assignmetn here </h1>
            <div className="overflow-x-auto">
				<table className="table table-xs md:table-lg mx-auto">
					<thead>
						<tr>
							<th>Assignment Title</th>
							<th>Total Marks</th>
							<th>Stutus</th>
							<th> Your Obtain marks</th>
							<th>FeedBack</th>
						</tr>
					</thead>
					<tbody>
						{
                        data.map((item) => (
							<tr className="hover">
								<td>{item.title}</td>
								<td>{item.marks}</td>
								<td>{item.status}</td>
								<td>{item.ObtainMarks}</td>
								<td>{item.feedback || "N/A"}</td>
								
							</tr>
						))
                        }
					</tbody>
				</table>

			</div>
        </div>
    );
};

export default MyAssingments;