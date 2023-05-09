import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Admin = () => {
    const [data, setData] = useState({});
    const [poster, setPoster] = useState(null);
    useEffect(() => {
        const uploadPoster = () => {
          const name = new Date().getTime + poster.name;
          const storageRef = ref(storage, poster.name);
          const uploadTask = uploadBytesResumable(storageRef, poster);
    
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // const progress =
              //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              switch (snapshot.state) {
                case "paused":
                  console.log("upload is paused");
                  break;
                case "running":
                  console.log("upload is running");
                  break;
    
                default:
                  break;
              }
            },
            (error) => {
              console.log(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setData((prev) => ({ ...prev, img: downloadURL }));
              });
            }
          );
        };
        poster && uploadPoster();
      }, [poster]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("fired")
        let res = await addDoc(collection(db, "accounts"), {
            ...data
        });
        console.log(res);
    }
  return (
    <div className='items-center w-[90%] sm:w-[50%] mx-auto text-white'>
        <h1 className='text-2xl mb-10'>Add new Account</h1>
        <form className="flex flex-col p-[50px]" onSubmit={handleSubmit}>
        <input className='mb-5 py-1 px-2 rounded-sm text-black' name="account" type='text' placeholder='Amazon' required onChange={(e)=>{setData({accountName:e.target.value})}} />
        <input
        type="file"
        id="images"
        accept="image/*"
        name="imageUpload"
        required
        onChange={(e) => setPoster(e.target.files[0])}
        />
        <button className="bg-white px-2 py-1 text-black mt-5 rounded" type="submit">Upload</button>
        </form>
    </div>
  )
}

export default Admin
