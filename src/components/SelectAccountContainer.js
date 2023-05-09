import { collection, doc, getDoc,addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase-config";

const initialState = {
  userName: "",
  password: "",
  notes: "",
};

const SelectAccountContainer = () => {
  const { id } = useParams();
  const [account, setAccount] = useState({});
  const [newAccount, setNewAccount] = useState(initialState);

  useEffect(() => {
    id && getAccountDetails();
  }, [id]);

  const getAccountDetails = async () => {
    const docRef = doc(db, "accounts", id);
    const accountDetail = await getDoc(docRef);
    setAccount(accountDetail.data());
    // console.log(account);
  };

  const handleChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newAccount);
    let res = await addDoc(collection(db, "vault"), {
      ...newAccount,
      userID : auth?.currentUser?.uid,
      accountName : account?.accountName,
      imgURL : account.img
    });
    console.log(res);
  };

  return (
    <div className=" sm:w-[50%] mx-auto text-white">
      <h1 className="font-bold text-3xl mb-5 mx-[5%]">Add Account</h1>
      <div className="flex items-center mb-5">
        <img src={account.img} className="bg-white rounded-lg w-[120px] mr-5" />
        <h1 className="text-5xl">{account?.accountName}</h1>
      </div>

      <form className="flex flex-col px-3" onSubmit={handleSubmit}>
        <label className="text-xl">username</label>
        <input
          name="userName"
          type="text"
          className="text-xl bg-transparent border-b focus:outline-none mb-2 "
          placeholder="example@example.com"
          autoFocus
          required
          onChange={handleChange}
        />

        <label className="text-xl">password</label>
        <input
          name="password"
          type="password"
          className="text-xl bg-transparent border-b focus:outline-none mb-2 "
          placeholder="woooo"
          autoFocus
          required
          onChange={handleChange}
        />

        <label className="text-xl">notes</label>
        <textarea className="text-xl bg-transparent border rounded-lg focus:outline-none py-1 px-3 mb-20"></textarea>
        <button className="bg-white text-black py-2 rounded-xl" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default SelectAccountContainer;
