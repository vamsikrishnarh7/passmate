import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const PasswordContainer = () => {
  return (
    <>
    <div className='flex items-center gap-5 border py-1 px-2 rounded-lg'>
      <div className='float-left '>
      <img src='./socials-logos/github.svg'/>
      </div>
      <div>
        <h3 className='text-xl font-bold'>GitHub</h3>
        <p>vamsikrishnarh7</p>
      </div>
      <AiOutlineArrowRight size={30} />
    </div>
    </>
  )
}

export default PasswordContainer
