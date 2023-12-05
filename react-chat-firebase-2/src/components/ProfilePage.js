import React, { useState } from 'react';

import {getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import {getDatabase, ref, set as firebaseSet} from 'firebase/database';
import {getAuth, updateProfile } from 'firebase/auth'

export default function ProfilePage(props) {
  //convenience
  const displayName = props.currentUser.userName;

  const [imageFile, setImageFile] = useState(undefined)
  let initialURL = props.currentUser.userImg;
  const [imageUrl, setImageUrl] = useState(initialURL)

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = async (event) => {
    console.log("Uploading", imageFile);

    const storage = getStorage();
    const imageRef = storageRef(storage, "userImages/"+props.currentUser.uid+".png")
    
    await uploadBytes(imageRef, imageFile)
    const url = await getDownloadURL(imageRef)
    console.log(url);
    updateProfile(props.currentUser, {photoURL: url}) //update the profile
    
    //example
    const userImgRef = ref(getDatabase(), "userData/"+props.currentUser.uid/+"img")
    firebaseSet(userImgRef, {url: url, alt: "text"));

  }

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <img src={imageUrl} alt="user avatar preview" className="mb-2"/>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}