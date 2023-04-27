import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  username : "",
  password : "",
  reEnterPassword : ""
}

const SignUp = () => {
  const [data,setData] = useState(initialState);
  const [passwordErr, setPasswordErr] = useState(false);
  const navigate = useNavigate();
  const handleSingIn = (e) => {
    e.preventDefault()
    navigate("/signin");
  }
  const validate = (e) => {
    e.preventDefault()
    if(data.password !== data.reEnterPassword){
      setPasswordErr(!passwordErr);
    }
  }
  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value} )
  }
  return (
    <div className='w-[90%] sm:w-[50%] text-white p-5 mx-auto flex flex-col items-center'>
      <p className='text-4xl sm:text-5xl font-bold mb-5'>Create your account</p>
      <p className='mb-8'>Already registered? <button onClick={handleSingIn}>SignIn</button></p>
      <form className='flex flex-col gap-2 w-[80%] sm:w-[60%] p-10 bg-[rgba(255,255,255)] text-black rounded-lg items-center'>
      {passwordErr && <span className='text-red-600 ring-1 ring-red-400 px-2 py-1 rounded'>Password missmatch</span>}  
      <div className='flex flex-col gap-2'>
          <label>Username</label>
          <input type='text' className='border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 focus:ring-2' required onChange={handleChange}/>
        </div>  
        <div className='flex flex-col gap-2'>
          <label>Password</label>
          <input name='password' type='text' className='border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 focus:ring-2' required onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Re-enter Password</label>
          <input name='re-password' type='text' className='border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 focus:ring-2' required onChange={handleChange}/>
          <button type='submit' className='mt-5 font-bold text-white bg-indigo-600 p-1 rounded hover:bg-indigo-700' onClick={validate}>Sign Up</button>
          </div>
      
        
      </form>
    </div>
  )
}

export default SignUp
