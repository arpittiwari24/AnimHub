import React, { useState } from "react";
import { auth } from "../../firebase/auth";
import { DarkLogo } from "../../assets/logos/Logo";
import { IoMdCheckmark } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { sendData } from "../../api";
import { deleteUser } from "firebase/auth";
import axios from "axios";

const Login = ({ closePopup }) => {
  const [form, setForm] = useState({});
  const [checked, setChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const errorCodes = {
    "auth/user-not-found": "Invalid Email",
    "auth/wrong-password": "Invalid Password",
  };
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(
      auth,
      e.target[0].value,
      e.target[1].value
    ).catch((error) => {
      setErrorMsg(errorCodes[error.code]);
    });
    console.log("Code reached herer", user);
    if (user) {
      closePopup();
      toast.success("Login Successfull");
      navigate("/dashboard");
      // })
      // .catch();
      // console.log("User logged in");
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
    console.log("Await");
    const { user } = await signInWithPopup(auth, provider);

    console.log("User", user);
    if (user) {
      const details = {
        name: user.displayName,
        email: user.email,
      };
      console.log(Date.now() - user.metadata.createdAt);
      if (Date.now() - user.metadata.createdAt <= 1000) {
        closePopup();
        toast.success("Login Successfull");
        navigate("/onboarding");
      } else {
        closePopup();
        toast.success("Login Successfull");
        navigate("/dashboard");
      }
      // console.log("detaila", details);
      // await sendData("/api/v1/auth/signup", details)
      // .then((res) => {
      //   console.log("Response", res);

      // })
      // .catch(() => {
      //   console.log("Error from server");
      // })
      // .then(() => {
      //   closePopup()
      //   navigate("/dashboard")
      //   return
      // })
      // .catch((error) => {

      //   console.log("Error from server", error)
      //   const currentUser = auth.currentUser
      //   deleteUser(currentUser)
      //   .then(() => {
      //     console.log("User Deleted")
      //   })
      //   .catch((error) => {
      //     console.log("Error while deleting user", error)
      //   })
      // console.log("HEerer");
      // })
    }
    // .then(() => {
    // await sendData("/api/v1/auth/login", data);
  };

  return (
    <>
      <div className="w-[30vw] h-full flex justify-center items-end rounded-md">
        <div className="w-[full] h-full flex flex-col justify-start items-center gap-2 px-2 pt-6 py-4">
          <DarkLogo width="180px" height="60px" />
          <h1 className="flex justify-center text-white text-3xl font-bold items-center">
            Member Sign in
          </h1>
          <p className="flex justify-center text-[#C6C6C6] text-lg tracking-wider items-center">
            Access your AnimHub account
          </p>
          <form
            className="w-full flex flex-col justify-center items-center gap-4 my-2"
            onSubmit={loginUser}
          >
            <p className="text-sm text-[#f00]">{errorMsg}</p>
            <div className="flex justify-between bg-[#212121] border-[#333333] min-w-[400px] items-center p-2 rounded-sm pl-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className=" appearance-none  bg-[#212121] w-full focus:outline-none"
              />
              <IoMdCheckmark className="text-[green] text-2xl" />
            </div>
            {/* <div className="flex justify-between bg-[#212121] border-[#333333] min-w-[400px] items-center p-2 rounded-sm pl-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                className=" appearance-none  bg-[#212121] w-full focus:outline-none"
              />
              <IoMdCheckmark className="text-[green] text-2xl" />
            </div> */}
            <div className="flex justify-between bg-[#212121] border-[#333333] min-w-[400px] items-center p-2 rounded-sm pl-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className=" appearance-none  bg-[#212121] w-full focus:outline-none"
              />
              <IoMdCheckmark className="text-[green] text-2xl" />
            </div>
            <div className="w-full flex justify-start items-start gap-2 p-2 rounded-sm pl-4">
              <input
                type="checkbox"
                name="checkbox"
                onChange={() => {
                  setChecked(!checked);
                }}
                // onClick={}
              />
              <div>
                <p className="text-[#c6c6c6] font-semibold leading-[14px]">
                  Remember me on this computer!
                </p>
                <p className="text-[#c6c6c6] font-medium leading-[14px]">
                  (Please read this carefully!)
                </p>
              </div>
            </div>
            <button
              className="flex justify-center items-center rounded-sm px-6 py-3 font-semibold text-black bg-primary disabled:bg-[#2f2f2f] disabled:text-[#969696] mt-4 disabled:cursor-not-allowed"
              disabled={!form.email || !form.password || !checked}
              type="submit"
            >
              Sign In
            </button>
          </form>
          <button
            className="flex justify-center items-center gap-2 rounded-sm px-6 py-3 font-semibold text-black bg-primary disabled:bg-[#2f2f2f] disabled:text-[#969696] mt-4 disabled:cursor-not-allowed"
            onClick={handleOAuth}
          >
            <FcGoogle className="text-2xl" />
            Sign In with Google
          </button>
          <div className="flex flex-col text-[#c6c6c6] font-medium justify-center items-center">
            <p className="flex justify-center items-center gap-1">
              Don't have an account yet?{" "}
              <a href="/login" className=" text-primary">
                Sign Up
              </a>{" "}
              here.
            </p>
            <p className="flex gap-1">
              <a href="/tandc" className="whitespace-nowrap text-primary">
                Forgot Username and password?
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      {/* <form onSubmit={loginUser}>
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
      <button onClick={change}>Signup Button</button> */}
    </>
  );
};

export default Login;
