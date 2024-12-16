// Profile component: Profile.jsx
import React, { useContext } from "react";
import { AppContext } from "../App";
// Import the image - adjust the path based on your actual image location
import profileImage from "../images/profile-image.jpg";

const Profile = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="profile">
      <img src={profileImage} alt="Profile" />
    </div>
  );
};

export default Profile;
