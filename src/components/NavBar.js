import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const NavBar = () => {

    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className=' text-white max-w-[1280px] px-4 py-5 mx-auto flex justify-between items-center '>
        <Link to="/"><h1 className='text-3xl font-bold'>PassMate</h1></Link>
        
        <ul className=' hidden md:flex gap-10 text-lg cursor-pointer uppercase'>
            <li>Home</li>
            <li className='bg-white text-black py-1 px-2 rounded-lg '>SignIn/Up</li>
            <li>About</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}            
        </div>
        <div className={!nav ? 'bg-gray-900 fixed left-0 top-0 w-[50%] h-full border-r-2 border-r-gray-900 ease-in-out duration-500 z-[999]' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl font-bold p-4'>PassMate</h1>    
            <ul className='pt-24 uppercase ml-3 text-bold'>
                <li className='p-4 rounded-lg border-b-2 border-b-gray-600'>Home</li>
                <li className='p-4 rounded-lg border-b-2 border-b-gray-600'>SignIn/Up</li>
                <li className='p-4'>About</li>
            </ul>
        </div>
        </div>
    )
}

export default NavBar
