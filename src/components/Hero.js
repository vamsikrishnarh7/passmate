import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-[90%] mx-auto text-white flex flex-col items-center' >
      <h1 className='text-[55px] sm:text-[80px]'>Never use <br/><span className='bg-white text-black'>Forget Password</span> <br/>anymore</h1>
      <button className='rounded-lg border-2 border-gray-600 mt-2 px-3 py-1 drop-shadow-[3px_3px_35px_white]'>SignIn</button>
      <p className='my-10'>Don't have account? Let's fix that <Link to="/signup"><button className='ml-5 rounded-lg border-b-2 border-b-gray-600 px-3'>SignUp</button></Link></p>
      
      <div className='flex gap-5 items-center mb-6'>

        <img src='./socials-logos/gmail.png' className='border rounded drop-shadow-[3px_3px_35px_red] p-1'/>
        <img src='./socials-logos/dropbox.png' className='border rounded drop-shadow-[3px_3px_32px_white] p-1'/>
        <img src='./socials-logos/github.svg' className='w-[57px] border rounded drop-shadow-[3px_3px_35px_red] p-1'/>
        <img src='./socials-logos/discord.png' className='border rounded drop-shadow-[3px_3px_35px_white] p-1'/>
        <p>And more</p>
      </div>
    </div>
  )
}

export default Hero
