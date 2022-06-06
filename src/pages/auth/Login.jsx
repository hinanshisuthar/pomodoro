import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const guestLoginHandler = () => {
    setLoginCredentials({
      email: "hinanshis4@gmail.com",
      password: "1234567",
    });
    loginUser({
      email: "hinanshis4@gmail.com",
      password: "1234567",
    });
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="h-100 center">
      <div className="auth-box p-md br-10">
        <h2 className="text-center">Login</h2>
        <div className="pt-1">
          <div className="flex-col-sb-start w-100">
            <label className="my-sm text-bold w-100">
              <h5>Email</h5>
              <input
                type="text"
                className="input p-sm my-sm"
                placeholder="username"
                value={loginCredentials.email}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    email: e.target.value,
                  })
                }
              />
            </label>
            <label className="mb-sm text-bold w-100">
              <h5>Password</h5>
              <input
                type="password"
                className="input p-sm my-sm"
                placeholder="password"
                value={loginCredentials.password}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    password: e.target.value,
                  })
                }
              />
            </label>
          </div>
          <div className="flex-col-sb">
            <button
              type="submit"
              className="btn btn-secondary br-8 mb-sm login-btn"
              onClick={() => loginUser(loginCredentials)}
            >
              Login
            </button>
            <button
              type="submit"
              className="btn btn-primary br-8 mb-sm"
              onClick={() => guestLoginHandler()}
            >
              Guest Login
            </button>
            <h5 className="p-sm">
              Create new account
              <Link to="/signup">
                <span className="highlight">Sign Up</span>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
