import React, { useContext, useState } from 'react';
import AuthImage from "../../assets/login-regi.png";
import { AuthContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {


    const {user   ,SignIN , GoogleSignIn} = useContext(AuthContext)
    const [error , setError] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e) => {

        e.preventDefault()
        const loadToast = toast.loading("signing in User")


        const Email = e.target.Email.value
        const Password = e.target.Password.value
        
        const user = { Email , Password }
        console.log(user);


        SignIN( Email , Password )
            .then(result => {
                const success = toast.success('User Created Successfully')
                console.log(result.user);
                toast.dismiss(loadToast , success)
                navigate("/")
                
            })
            .catch(error  => {
                console.log(error.message);
            })


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
                            <p className="text-red-500">   {error}</p>
							<div className="form-control mt-6">
								<button type="submit" className="btn btn-primary">
									SignIn
								</button>
							</div>

						</form>
							<div className="form-control mt-2  mx-8 mb-5 -mt-2">
								<button onClick={handlegoogelSignIn}  className="btn btn-primary">
									SignIN with Google
								</button>
							</div>
                        <Toaster></Toaster>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Login;