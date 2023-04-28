import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
    email : "",
    password : ""
  }

const SignIn = () => {
    const [msg,setMessage] = useState('');
    const [data,setData] = useState(initialState);
    const [passwordErr, setPasswordErr] = useState(false);
    const navigate = useNavigate();
    const {signIn} = UserAuth();

    const handleSignIn = async (e) => {
      e.preventDefault()
      try{
        await signIn(data.email,data.password)
        console.log("signed in")
      }catch(e){
        if(e.code == 'auth/wrong-password'){
          setPasswordErr(true);
          setMessage("Wrong password")
        }
        else if(e.code == 'auth/user-not-found'){
          setPasswordErr(true);
          setMessage("User not found")
        }
        console.log(e.message);
      }
      // console.log(data.password)
      // console.log(data.reEnterPassword)
      // if(data.password != data.reEnterPassword){
      //   setPasswordErr(true);
      // }
      // else setPasswordErr(false);
    }
    const handleChange = (e) => {
      setData({...data, [e.target.name]:e.target.value} )
    }
  return (
    <div className='w-[90%] sm:w-[50%] text-white p-5 mx-auto flex flex-col items-center'>
      <p className='text-4xl sm:text-5xl font-bold mb-5'>Sign In</p>
      <form className='flex flex-col gap-2  sm:w-[60%] p-10 bg-[rgba(255,255,255)] text-black rounded-lg items-center' onSubmit={handleSignIn}>
      {passwordErr && <span className='text-red-600 ring-1 ring-red-400 px-2 py-1 rounded'>{msg}</span>}  
      <div className='flex flex-col gap-2'>
          <label>Username</label>
          <input name='email' type='mail' className='border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 focus:ring-2' required onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Password</label>
          <input name='password' type='password' className='border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 focus:ring-2' required onChange={handleChange}/>
          <button type='submit' className='mt-5 font-bold text-white bg-indigo-600 p-1 rounded hover:bg-indigo-700'>Sign In</button>
        </div>
      
        
      </form>
    </div>
  )
}

export default SignIn
