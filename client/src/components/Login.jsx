import React, { useState } from "react";
import { auth } from "../firebase/auth";
import axios from "axios";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const sendData = async (data) => {
  axios
    .post("http://localhost:8000/api/v1/auth/login", data)
    .then((res) => {
      console.log("Success", res);
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

const Login = () => {
  const [form, setForm] = useState({});
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(
      auth,
      e.target[0].value,
      e.target[1].value
    );
    if (user) {
      console.log(user);
      axios
        .post("http://localhost:8000/api/v1/auth/login", form)
        .then((res) => {
          console.log("Success", res);
        })
        .catch((err) => {
          console.log("Error", err);
        });
      console.log("User logged in");
    }
    console.log("User not logged in");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOAuth = async () => {
    const user = await signInWithPopup(auth, provider);
    const data = {
      email: user.user.email,
      password: user.user.uid,
    };
    sendData(data);
    console.log(user.user.photoURL, "User name here");
  };
  const change = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleOAuth}>Google</button>
      <button onClick={change}>Signup Button</button>
    </div>
  );
};

export default Login;
