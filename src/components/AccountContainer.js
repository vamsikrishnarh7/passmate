import React from 'react'

const AccountContainer = ({imgURL,accountName}) => {
  accountName = accountName[0].toUpperCase()+accountName.slice(1)
  return (
    <div className='w-[150px] sm:w-auto mx-auto p-3 my-3 text-white border rounded flex flex-col items-center'>
      <img src= {imgURL} className='bg-white rounded-lg w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />
      <h1 className='text-xl font-bold'>{accountName}</h1>
    </div>
  )
}

export default AccountContainer
