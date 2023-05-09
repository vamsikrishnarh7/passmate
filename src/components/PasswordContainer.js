import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const PasswordContainer = ({imgURL,accountName,userName}) => {
  return (
    <>
    <div className='w-[90%] lg:w-[45%] flex justify-between items-center gap-5 border py-1 px-2 rounded-lg'>
      <div className='float-left '>
      <img src={imgURL} className='w-[48px] h-[48px] bg-white rounded-full'/>
      </div>
      <div className='w-[50%] overflow-hidden'>
        <h3 className='text-xl font-bold'>{accountName}</h3>
        <p>{userName}</p>
      </div>
      <AiOutlineArrowRight size={30} className='item-end' />
    </div>
    </>
  )
}

export default PasswordContainer
