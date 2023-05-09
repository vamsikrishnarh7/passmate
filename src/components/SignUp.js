import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/AuthContext'
import { toast } from 'react-toastify';
const initialState = {
  email : "",
  password : "",
  reEnterPassword : ""
}

const SignUp = () => {
  const [msg,setMessage] = useState('Password missmatch')
  const [data,setData] = useState(initialState);
  const [passwordErr, setPasswordErr] = useState(false);
  const [err, setErr] = useState('');
  // const {createUser} = UserAuth();
  const {createUser} = useContext(UserContext);

  const navigate = useNavigate();

  const handleSingIn = (e) => {
    e.preventDefault()
    navigate("/auth/signin");
  }

  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value} )
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErr('');
    console.log(data.email)
    console.log(data.password)
    console.log(data.reEnterPassword)
    if(data.password != data.reEnterPassword){
      setPasswordErr(true);
      setMessage("Password missmatch");
    }
    else {
      setPasswordErr(false);
      try{
        if(!passwordErr){
          await createUser(data.email,data.password)
          console.log("user created")
          toast.success('Account created', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/all-accounts")
        }
      }catch(e){
        setErr(e.message)        
        if(e.code === 'auth/email-already-in-use') {
          setPasswordErr(true);
          setMessage("email already in use");
        }
        else if(e.code === "auth/weak-password"){
          setPasswordErr(true);
          setMessage("Password should be at least 6 characters")
        }
        else { console.log("fired"); setPasswordErr(false)}
        console.log(e.message)
      }
  }
  }

  return (
    <div className='w-[90%] sm:w-[50%] text-white p-5 mx-auto flex flex-col items-center'>
      <p className='text-4xl sm:text-5xl font-bold mb-5'>Create your account</p>
      <p className='mb-8'>Already registered? <button onClick={handleSingIn}>SignIn</button></p>
      <form className='flex flex-col gap-2  sm:w-[60%] p-10 bg-[rgba(255,255,255)] text-black rounded-lg items-center' onSubmit={handleSubmit}>
      {passwordErr && <span className='text-red-600 ring-1 ring-red-400 px-2 py-1 rounded'>{msg}</span>}  
      <div className='flex flex-col gap-2'>
          <label>Username</label>
          <input name='email' type='mail' className='border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 focus:ring-2' required onChange={handleChange}/>
        </div>  
        <div className='flex flex-col gap-2'>
          <label>Password</label>
          <input name='password' type='password' className='border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 focus:ring-2' required onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Re-enter Password</label>
          <input name='reEnterPassword' type='password' className='border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 focus:ring-2' required onChange={handleChange}/>
          <button type='submit' className='mt-5 font-bold text-white bg-indigo-600 p-1 rounded hover:bg-indigo-700' >Sign Up</button>
          </div>
      
        
      </form>
    </div>
  )
}

export default SignUp
