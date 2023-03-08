import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState("");

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { logInUser, LogOutUser, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    setError("");

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          LogOutUser();
          toast.error("Your email address not verified");
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleLogin} className="w-75 mx-auto">
      <h3 className="bg-">Login</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          required
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <small>
            Create an account?{" "}
            <Link to={"/register"} style={{ textDecoration: "none" }}>
              Register
            </Link>
          </small>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary w-25">
          Login
        </button>
      </div>
      <small className="forgot-password text-right">
        <Link style={{ textDecoration: "none" }}>Forgot password</Link>
      </small>
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
};

export default LogIn;
