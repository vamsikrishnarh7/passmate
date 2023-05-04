import React from 'react'

const SelectAccountContainer = () => {
  return (
    <div className=' text-white'>
      <div className='flex items-center mb-5'>
        <img src='../socials-logos/amazon-icon.svg' className='bg-white rounded-lg w-[120px] mr-5'/>
        <h1 className='text-5xl'>Amazon</h1>
      </div>
      
      <form className='flex flex-col px-3'>
      <label className='text-xl'>username</label>
      <input type='email' className='text-xl bg-transparent border-b focus:outline-none mb-2 ' placeholder='example@example.com' autoFocus/>
      
      <label className='text-xl'>password</label>
      <input type='password' className='text-xl bg-transparent border-b focus:outline-none mb-2 ' placeholder='woooo' autoFocus/>
      
      <label className='text-xl'>notes</label>
      <textarea className='text-xl bg-transparent border rounded-lg focus:outline-none py-1 px-3 mb-20'></textarea>
      <button className='bg-white text-black py-2 rounded-xl'>Save</button>
      </form>
    </div>
  )
}

export default SelectAccountContainer
