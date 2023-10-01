import React, { useState } from "react";
import { auth } from "../../firebase/auth";
import { DarkLogo } from "../../assets/logos/Logo";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillFund } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdCheckmark } from "react-icons/io";
import temp from "./tempbg.jpeg";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { sendData } from "../../api";


const Signup = ({ closePopup }) => {
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
    createUser.user.displayName = form.name;
    if (createUser) {
      closePopup();
      navigate("/onboarding")
      return
    }
  };

  const handledata = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOAuth = async () => {
    const { user } = await signInWithPopup(auth, provider)
    if (user) {
      console.log(Date.now() - user.metadata.createdAt);
      if (Date.now() - user.metadata.createdAt <= 5000) {
        closePopup()
        navigate("/onboarding")
      }
      else {
        closePopup()
        navigate("/dashboard")
      }
    }
  }


  return (
    <>
      <div className="w-[60vw] h-[82vh] flex justify-center items-end rounded-md">
        <div
          className="flex justify-center items-end w-[45%] h-[100%] rounded-md" // Outer div with relative positioning
          style={{
            backgroundImage: `url(${temp})`, // Set the background image
            backgroundSize: "cover", // Adjust background size as needed
            backgroundPosition: "center", // Adjust background position as needed
            // width: "100%",
            // height: "auto", // Set the height to cover the viewport
          }}
        >
          <div className="flex justify-center items-end w-full h-full gap-2 pb-4">
            <div className="flex flex-col justify-center items-center text-center bg-[#151515] px-2 py-3 rounded-lg">
              {/* Inner div with absolute positioning */}
              <span className="text-4xl font-medium text-primary">140M</span>
              <span className="text-xl font-bold text-white">Engaged</span>
              <span className="text-lg font-light text-white">daily users</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-[#151515] px-2 py-3 rounded-lg">
              {/* Inner div with absolute positioning */}
              <span className="text-4xl font-medium text-primary">140M</span>
              <span className="text-xl font-bold text-white">Engaged</span>
              <span className="text-lg font-light text-white">daily users</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-[#151515] px-2 py-3 rounded-lg">
              {/* Inner div with absolute positioning */}
              <span className="text-4xl font-medium text-primary">140M</span>
              <span className="text-xl font-bold text-white">Engaged</span>
              <span className="text-lg font-light text-white">daily users</span>
            </div>
          </div>
        </div>
        <div className="w-[55%] h-full flex flex-col justify-start items-center gap-2 px-8 py-4">
          <DarkLogo width="180px" height="60px" />
          <h1 className="flex justify-center text-white text-4xl font-bold items-center">
            Sign Up for Free
          </h1>
          <p className="flex justify-center text-[#C6C6C6] text-lg tracking-wider items-center">
            and animate your experience
          </p>
          <div className="flex justify-center items-center gap-4 mt-6 ">
            <di className="flex justify-center items-center gap-2 flex-col">
              <AiFillFileAdd className="text-3xl" />
              <p className="text-[14px] text-center text-[#c6c6c6] font-bold leading-[14px] max-w-[100px]">
                Add your components
              </p>
            </di>
            <div className="flex justify-center items-center gap-2 flex-col">
              <AiFillFund className="text-3xl" />
              <p className="text-[14px] text-center text-[#c6c6c6] font-bold leading-[14px] max-w-[100px]">
                Engage with community
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 flex-col">
              <FaFileDownload className="text-3xl" />
              <p className="text-[14px] text-center text-[#c6c6c6] font-bold leading-[14px] max-w-[100px]">
                Download code for free
              </p>
            </div>
          </div>
          <form
            className="w-full flex flex-col justify-center items-center gap-4 my-2"
            onSubmit={saveData}
          >
            <div className="flex justify-between bg-[#212121] border-[#333333] min-w-[400px] items-center p-2 rounded-sm pl-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handledata}
                className=" appearance-none  bg-[#212121] w-full focus:outline-none"
              />
              <IoMdCheckmark className="text-[green] text-2xl" />
            </div>
            <div className="flex justify-between bg-[#212121] border-[#333333] min-w-[400px] items-center p-2 rounded-sm pl-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handledata}
                className=" appearance-none  bg-[#212121] w-full focus:outline-none"
              />
              <IoMdCheckmark className="text-[green] text-2xl" />
            </div>
            <div className="flex justify-between bg-[#212121] border-[#333333] min-w-[400px] items-center p-2 rounded-sm pl-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handledata}
                className=" appearance-none  bg-[#212121] w-full focus:outline-none"
              />
              <IoMdCheckmark className="text-[green] text-2xl" />
            </div>
            <button
              className="flex justify-center items-center rounded-sm px-6 py-3 font-semibold text-black bg-primary disabled:bg-[#2f2f2f] disabled:text-[#969696] mt-4 disabled:cursor-not-allowed"
              disabled={!form.email || !form.name || !form.password}
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <button
            className="flex justify-center items-center gap-2 rounded-sm px-6 py-3 font-semibold text-black bg-primary disabled:bg-[#2f2f2f] disabled:text-[#969696] mt-4 disabled:cursor-not-allowed"
            onClick={handleOAuth}
          >
            <FcGoogle className="text-2xl" />
            Sign Up with Google
          </button>
          <div className="flex flex-col text-[#c6c6c6] font-medium justify-center items-center">
            <p className="flex justify-center items-center gap-1">
              Already have an account?{" "}
              <a href="/login" className=" text-primary">
                Login
              </a>{" "}
              here.
            </p>
            <p className="flex gap-1">
              By signing up, you agree to our
              <a href="/tandc" className="whitespace-nowrap text-primary">
                Terms and Conditions
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
