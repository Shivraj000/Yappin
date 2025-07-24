import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
const Login =() =>{

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};


  return (
	
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto min-h-screen">
  <div className="w-full p-6 rounded-xl shadow-2xl bg-white/10 border border-white/20 backdrop-blur-lg transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105">
  
    <h1 className="text-3xl font-semibold text-center text-white drop-shadow-md">
      Login
<span
  className="bg-gradient-to-r from-blue-600 via-teal-500 via-emerald-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-extrabold"
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
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>
                    <div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;