import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [userName, setUserName] = useState(user?.displayName);
  const [userEmail, setUserEmail] = useState(user?.email);
  const photoURLRef = useRef(user?.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-auto">
      <h3 className="text-center">Profile</h3>
      <div className="mb-3">
        <label>User Name</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          defaultValue={userName}
          type="name"
          className="form-control"
          name="userName"
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          defaultValue={userEmail}
          readOnly
          type="email"
          className="form-control"
          name="email"
        />
      </div>
      <div className="mb-3">
        <label>Photo URL</label>
        <input
          ref={photoURLRef}
          defaultValue={user?.photoURL}
          type="text"
          className="form-control"
          name="photoURL"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary w-25">
          Update
        </button>
      </div>
    </form>
  );
};

export default Profile;
