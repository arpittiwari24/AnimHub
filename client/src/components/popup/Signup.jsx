import React, { useState } from "react";
import { auth } from "../../firebase/auth";
import { DarkLogo } from "../../assets/logos/Logo";
import temp from "./tempbg.jpeg";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sendData } from "../../api";


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
        const userDetails = {
          username: data.username,
          name: data.name,
          email: data.email,
          password: data.password,
          photoURL: data.photoURL || "",
        };
        await sendData("/api/v1/auth/signup", userDetails);
        // };
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
    await sendData("/api/v1/auth/signup", data);
    console.log(user.user.photoURL, "User name here");
  };

  const change = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <div className="w-[70vw] h-[80vh] flex justify-center items-end">
        <div
          className="flex justify-center items-center w-[45%] h-[80vh] " // Outer div with relative positioning
          style={{
            backgroundImage: `url(${temp})`, // Set the background image
            backgroundSize: "cover", // Adjust background size as needed
            backgroundPosition: "center", // Adjust background position as needed
            // width: "100%",
            // height: "auto", // Set the height to cover the viewport
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            {/* Inner div with absolute positioning */}
            <span className="text-4xl font-medium text-primary">140M</span>
            <span className="text-xl font-bold text-white">Engaged</span>
            <span className="text-lg font-light text-white">daily users</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            {/* Inner div with absolute positioning */}
            <span className="text-4xl font-medium text-primary">140M</span>
            <span className="text-xl font-bold text-white">Engaged</span>
            <span className="text-lg font-light text-white">daily users</span>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            {/* Inner div with absolute positioning */}
            <span className="text-4xl font-medium text-primary">140M</span>
            <span className="text-xl font-bold text-white">Engaged</span>
            <span className="text-lg font-light text-white">daily users</span>
          </div>
        </div>
        <div className="w-[55%] flex flex-col justify-center items-center px-8 py-4">
          <DarkLogo width="180px" />
          <h1>Sign Up for Free</h1>
          <p>lorem epsume lorem epsum</p>
          <div>
            <div>
              <p></p>
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <form onSubmit={saveData}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handledata}
              />
            </div>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handledata}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handledata}
              />
            </div>
            <button type="submit">Signup</button>
          </form>
          <button onClick={handleOAuth}>Google Signin</button>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
{
  /* <div>
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
    </div> */
}
