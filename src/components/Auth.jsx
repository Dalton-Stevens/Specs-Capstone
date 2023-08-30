import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

import classes from "./Auth.module.css";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);
  const { dispatch } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    let body = { username, password };

    axios
      .post(
        register
          ? "http://localhost:4004/register"
          : "http://localhost:4004/login",
        body
      )
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch((err) => {
        console.error(err);
      });

    // console.log("submitHandler called");
  };

  return (
    <div className={classes.full_screen_container}>
      <div className={classes.login_container}>
        <h1 className={classes.login_title}>Welcome</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.input_group}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <div className={classes.input_group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className={classes.login_button}>
              {register ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
        <button
          className={classes.register_button}
          onClick={() => setRegister(!register)}
        >
          Need to {register ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
