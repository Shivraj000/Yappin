import React from "react";
import GenderCheckbox from "./GenderCkeckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () =>{
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});
	const { loading, signup } = useSignup();
	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

		const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md px-4 mx-auto min-h-screen">
  <div className="w-full p-6 rounded-xl shadow-2xl bg-white/10 border border-white/20 backdrop-blur-lg transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105">
    <h1 className="text-2xl sm:text-3xl font-semibold text-center text-white drop-shadow-md">
      Sign Up
     <span
  className="bg-gradient-to-r from-purple-700 via-pink-500 via-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent font-black drop-shadow-lg"
  style={{
    WebkitTextStroke: '1.5px black',
  }}
>
  &nbsp; Yappin
</span>
    </h1>
	<form onSubmit={handleSubmit}>
		<div>
        <label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Enter Name'
							className='w-full input input-bordered  h-10'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter Username'
							className='w-full input input-bordered h-10'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
							
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
							
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 '
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
							
						/>
					</div>
                    <GenderCheckbox  onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block'
						href='#'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'
						disabled={loading}>

							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
							
						</button>
					</div>
			</form>		

    </div>
    </div>
	
    )
}
export default SignUp;