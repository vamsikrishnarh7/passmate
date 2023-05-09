import React, { useEffect,useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import PasswordContainer from "./PasswordContainer";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { db } from "../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

const Vault = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      let list = []
      const q = query(collection(db,"vault"), where("userID", "==", auth?.currentUser.uid));

      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        
          list.push({id:doc.id,...doc.data()});
          // console.log(updateDb);
          // console.log(updateDb.img)
      });
      setData(list);
      console.log(data);
    }
    fetchData();
  },[])

  return (
    <>
      <div className="w-[90%] sm:w-[50%] flex justify-between items-center mb-2 mx-auto">
        <h1 className="text-3xl mb-3 text-white sm:mx-[25%] ">Your Accounts</h1>
        <Link to="/add-account/select">
          <button className="flex text-xl p-2 bg-white rounded-lg text-black font-bold">
            <IoAddOutline size={25} />  
            Add
          </button>
        </Link>
      </div>
      <div className="container w-[90%] flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-between sm:w-[50%] mx-auto text-white">
        
        {data.map((ele)=>{
          return(
            <PasswordContainer 
              accountName = {ele.accountName}
              userName = {ele.userName}
              imgURL = {ele.imgURL}
            />
          )
        })}

      </div>
    </>
  );
};

export default Vault;
