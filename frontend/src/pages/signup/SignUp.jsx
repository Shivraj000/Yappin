import React from "react";
import GenderCheckbox from "./GenderCkeckbox";
const SignUp = () =>{
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md px-4 mx-auto min-h-screen">
  <div className="w-full p-6 rounded-xl shadow-2xl bg-white/10 border border-white/20 backdrop-blur-lg transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105">
    <h1 className="text-2xl sm:text-3xl font-semibold text-center text-white drop-shadow-md">
      Sign Up
      <span className='text-blue-500'> &nbsp; Yappin</span>
    </h1>
        <label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Enter Name'
							className='w-full input input-bordered  h-10'
							
						/>
					

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter Username'
							className='w-full input input-bordered h-10'
							
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							
						/>
					</div>
                    <GenderCheckbox/>

                    <a
						className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block'
						href='#'
					>
						Already have an account?
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>
							Sign Up
						</button>
					</div>

    </div>
    </div>
    )
}
export default SignUp;