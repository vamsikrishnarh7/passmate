import React from 'react'
import SelectAccountContainer from './SelectAccountContainer'

const SelectAccount = () => {
  return (
    <>
        <div className='mx-[5%] sm:mx-[10%]'>
            <h1 className='text-white font-bold text-3xl mb-5 '>Select Account</h1>
            <div>
              <SelectAccountContainer />
            </div>
        </div>
    </>
  )
}

export default SelectAccount
