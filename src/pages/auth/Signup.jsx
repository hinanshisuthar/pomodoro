import "./auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";

const Signup = () => {
  const [signupCredentials, setSignupCredentials] = useState({
    email: "",
    password: "",
  });
  const { signupUser } = useAuth();

  return (
    <div className="h-100 center">
      <div className="auth-box p-md br-10">
        <h2 className="text-center">Sign Up</h2>
        <div className="pt-1">
          <div className="flex-col-sb-start w-100">
            <label className="my-sm text-bold w-100">
              <h5>Email</h5>
              <input
                type="text"
                className="input p-sm my-sm"
                placeholder="rachelgreen@gmail.com"
                value={signupCredentials.email}
                onChange={(e) =>
                  setSignupCredentials({
                    ...signupCredentials,
                    email: e.target.value,
                  })
                }
              />
            </label>
            <label className="my-sm text-bold w-100">
              <h5>Password</h5>
              <input
                type="password"
                className="input p-sm my-sm"
                placeholder="**********"
                value={signupCredentials.password}
                onChange={(e) =>
                  setSignupCredentials({
                    ...signupCredentials,
                    password: e.target.value,
                  })
                }
              />
            </label>
          </div>
          <div className="flex-col-sb">
            <button
              type="submit"
              className="btn btn-primary br-8 mb-sm"
              onClick={() => signupUser(signupCredentials)}
            >
              Sign Up
            </button>
            <h5 className="p-sm">
              Existing User ?
              <Link to="/login">
                <span className="highlight"> Log In</span>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Signup };
