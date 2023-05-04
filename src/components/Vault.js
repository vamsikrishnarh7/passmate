import React from "react";
import { IoAddOutline } from "react-icons/io5";
import PasswordContainer from "./PasswordContainer";
import { Link } from "react-router-dom";

const Vault = () => {
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
        <PasswordContainer />
        <PasswordContainer />
        <PasswordContainer />
        <PasswordContainer />
        <PasswordContainer />
        <PasswordContainer />
        <PasswordContainer />
        <PasswordContainer />
      </div>
    </>
  );
};

export default Vault;
