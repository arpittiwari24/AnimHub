import React, { useState } from "react";
import { auth } from "../firebase/auth";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const sendData = async (data) => {
  const userDetails = {
    username: data.username,
    name: data.name,
    email: data.email,
    password: data.password,
    photoURL: data.photoURL || "",
    // userId: createUser.user.uid
  };
  axios
    .post("http://localhost:8000/api/v1/auth/signup", userDetails)
    .then((res) => {
      console.log("Success", res);
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

const Signup = () => {
  const [form, setForm] = useState({});
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const saveData = async (e) => {
    e.preventDefault();
    const createUser = await createUserWithEmailAndPassword(
      auth,
      form.email,
      form.password
    );
    console.log(createUser, typeof createUser);
    createUser.user.displayName = form.username;
    console.log(createUser.user.displayName, "User name here");
    if (createUser) {
      sendData(form);
    }
    console.log(createUser);
    console.log("saveData");
  };

  const handledata = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // console.log(form)
  };

  const handleOAuth = async () => {
    const user = await signInWithPopup(auth, provider);

    const data = {
      username: user.user.displayName,
      name: user.user.displayName,
      email: user.user.email,
      password: " ",
      photoURL: user.user.photoURL,
      // userId: createUser.user.uid
    };
    sendData(data);
    console.log(user.user.photoURL, "User name here");
  };

  const change = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={saveData}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handledata}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handledata}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handledata}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handledata}
        />
        <button type="submit">Signup</button>
      </form>
      <button onClick={handleOAuth}>Google Signin</button>
      <button onClick={change}>Login Button</button>
    </div>
  );
};

export default Signup;
