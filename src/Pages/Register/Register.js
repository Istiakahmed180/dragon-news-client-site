import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, LogOutUser, verifyEmail } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const userName = form.userName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(userName, photoURL);
        handleEmailVerification();
        navigate("/login");
        LogOutUser();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (userName, photoURL) => {
    const profile = {
      displayName: userName,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        toast.success("Please verify your email address!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleRegister} className="w-75 mx-auto">
      <h3 className="text-center">Register</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
          name="userName"
          className="form-control"
          placeholder="User name"
        />
      </div>
      <div className="mb-3">
        <label>Photo URL</label>
        <input
          type="text"
          name="photoURL"
          className="form-control"
          placeholder="Photo URL"
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          required
        />
      </div>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={(e) => setAccepted(e.target.checked)}
          label={
            <>
              Accept{" "}
              <Link
                style={{ textDecoration: "none" }}
                to={"/terms_and_condition"}
              >
                Terms And Condition
              </Link>
            </>
          }
        />
      </Form.Group>

      <div className="d-grid">
        <button disabled={!accepted} type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered?{" "}
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </p>
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
};

export default Register;
