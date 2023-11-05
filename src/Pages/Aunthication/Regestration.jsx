import React, { useContext, useState } from "react";
import AuthImage from "../../assets/login-regi.png";
import { AuthContext } from "../../Context/Context";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const Regestration = () => {

    const {user , createUser , profile , GoogleSignIn} = useContext(AuthContext)
    const [error , setError] = useState("")
    const navigate = useNavigate()
    console.log(name);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const loadToast = toast.loading("creating User")

        const Name = e.target.Name.value
        const Email = e.target.Email.value
        const Password = e.target.Password.value
        const PhotoUrl = e.target.PhotoUrl.value

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const isValidPassword = passwordRegex.test(Password);

        if(isValidPassword){

            createUser(Email , Password )
            .then(result => {
                console.log(result.user);
                profile(Name , PhotoUrl)
                .then(() => {
                    console.log("profile updated");
                    toast.success('User Created Successfully')
                    navigate("/")
                    toast.dismiss(loadToast)


                  }).catch((error) => {
                    console.log(error);
                  });
                
            })
            .catch(error  => {
                setError(error.massage);
            })
        }
        else {
            setError("Passwords must contain a digit, a lowercase letter, an uppercase letter, and be at least 8 characters long.")
        }


        const user = {Name , Email , Password , PhotoUrl}
        console.log(user);
    }

    const handlegoogelSignIn = () => {

        GoogleSignIn()
        .then(result => {
            console.log(result.user);
            navigate("/")
        })
        .catch(error => {
            setError(error);
        })
    }



	return (
		<div>
			<div className="hero min-h-screen bg-white">
				<div className="hero-content flex-col items-center lg:flex-row">
					<div className="text-center lg:text-left">
						<img src={AuthImage} alt="" />
					</div>
					<div className="card p-0 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={handleSubmit} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									placeholder="Name"
									className="input input-bordered"
                                    name="Name"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="email"
									className="input input-bordered"
                                    name="Email"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									className="input input-bordered"
									required
                                    name="Password"
								/>
							
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">PhotoUrl</span>
								</label>
								<input
									type="url"
									placeholder="PhotoUrl"
									className="input input-bordered"
                                    name="PhotoUrl"
								/>
							</div>
                            <p className="text-red-500">{error}</p>
							<div className="form-control mt-6">
								<button type="submit" className="btn btn-primary">
									SignUp
								</button>
							</div>
							
                            <Toaster></Toaster>

						</form>
                        <div className="form-control mx-8 mb-5 -mt-2">
								<button onClick={handlegoogelSignIn} className="btn btn-primary">
									SignUp with Google
								</button>
							</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Regestration;
