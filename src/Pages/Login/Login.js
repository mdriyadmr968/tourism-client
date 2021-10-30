import React from "react";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const history = useHistory();
  const redirect_uri = window.location.state?.from || '/';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then(result => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <h2>Please Login </h2>
      <button onClick={handleGoogleLogin} className="btn btn-warning">
        <i class="bi bi-google"></i> Google Sign In
      </button>
      <br />
    </div>
  );
};

export default Login;
