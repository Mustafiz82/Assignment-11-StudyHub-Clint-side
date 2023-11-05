import React, { useContext } from 'react';
import AuthImage from "../../assets/login-regi.png";


const Login = () => {


     
    const handleSubmit = (e) => {
        e.preventDefault()

        const Email = e.target.Email.value
        const Password = e.target.Password.value



        const user = { Email , Password }
        console.log(user);
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
							<div className="form-control mt-6">
								<button type="submit" className="btn btn-primary">
									SignIn
								</button>
							</div>
							<div className="form-control mt-2">
								<button className="btn btn-primary">
									SignIN with Google
								</button>
							</div>

						</form>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Login;