import React, { useState, useContext, useRef } from "react";
import { useQuery, useMutation } from "react-query";
import AuthService from "../../api-services/AuthService";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const Signin = ({closeRef, setModalType}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroMessages, setErrorMessages] = useState([]);
  const { user, setUser, token, setToken } = useContext(AuthContext);

  const login = useMutation(
    async () => await AuthService.login(email, password),
    {
      onSettled: (data, error) => {
        if (error) {
          let { response } = error;
          let { data } = response || {};

          if (data) {
            let { message } = data;
            setErrorMessages(message);
            // console.log(message)
          }
          return;
        }

        let { message, response, userId, accessToken, email } = data;

        if (message) {
          console.log("Message ", message);
          toast.error(message);
          return;
        }

        if (accessToken) {
          let user = {
            userId,
            email,
            token: accessToken,
          };

          localStorage.setItem("user", JSON.stringify(user));
          setUser({ userId, email, token: accessToken });
          toast.success("Login Successful");
          closeRef.current.click();
        }
      },
    }
  );

  const onClick = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    await login.mutateAsync();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 fltt">
          <div className="login-head ps-3">
            <h3>Sign In</h3>
            <span>
              or{" "}
              <a href="#" onClick={setModalType}>
                create an account
              </a>
            </span>
            <div className="line-divider"></div>
          </div>

          <form action="" onSubmit={onClick}>
            <div className="mb-3">
              <label className="form-label ps-3">Email</label>
              <input
                placeholder="Enter Email Address"
                type="email"
                name="email"
                className="modal-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label ps-3">Password</label>
              <input
                placeholder="Enter Password"
                type="password"
                name="password"
                className="modal-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-1 pe-2">
              <button type="submit" className="subscribe-btn w-100">
                Sign In
              </button>
            </div>
            <div id="emailHelp" className="form-text ps-3 mb-3">
              By clicking on Signin, I accept the Terms &amp; Conditions &amp;
              Privacy Policy
            </div>
          </form>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Signin;
