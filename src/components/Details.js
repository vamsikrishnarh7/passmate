import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from "../firebase-config";
import { getDoc,doc } from "firebase/firestore";

const Details = () => {
    
  const {id} = useParams();
  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  useEffect(()=>{
    id && getAccountDetails();
  },[id]);
  const getAccountDetails = async () => {
    const docRef = doc(db, "vault", id);
    const accountDetail = await getDoc(docRef);
    setAccount(accountDetail.data());
    console.log(account);
  };

  return (
    <div className='mx-5 text-white md:w-[45%] md:mx-auto md:flex md:flex-col md:items-center'>
      <h1 className='text-3xl mb-10'>Account details</h1>
      <div className='flex mb-10 items-end'>
        <img src={account?.imgURL} className="bg-white rounded-lg w-[60px] h-[60px] mr-5" />
        <h1 className='text-3xl'>{account?.accountName}</h1>
      </div>
      <div className='text-xl flex flex-col'>
        <div>
        <h1><span className='font-bold'>Username:</span> {account.userName}</h1>
        <p className='mb-5'><span className='font-bold'>Password: </span>{account.password}</p>
        </div>
        <button onClick={()=>navigate("/vault")} className='bg-white text-black px-2 py-1 rounded'>Back</button>
      </div>
    </div>
  )
}

export default Details
