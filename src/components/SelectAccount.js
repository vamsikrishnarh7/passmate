import React, { useEffect, useState } from 'react'
import SelectAccountContainer from './SelectAccountContainer'
import AccountContainer from './AccountContainer'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'

const SelectAccount = () => {
  const [data,setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      let list = []
      const querySnapShot = await getDocs(collection(db,"accounts"));
      querySnapShot.forEach((doc) => {
        list.push({id:doc.id,...doc.data()});
      });
      setData(list);
      console.log(data);
    }
    fetchData();
  },[])
  return (
    <>
        <div className='mx-[5%] sm:mx-[10%]'>
            <h1 className='text-white font-bold text-3xl mb-5 '>Select Account</h1>
            <div className='flex gap-5 flex-wrap'>
              {data.map(ele => {
                return(
                  <Link to={`/add-account/select/add/${ele.id}`}>
                    <AccountContainer 
                      imgURL ={ele.img}
                      accountName = {ele.accountName}
                    />

                  </Link>
                )
              })}
            </div>
        </div>
    </>
  )
}

export default SelectAccount
