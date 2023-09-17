import React from "react";
import { auth } from "../firebase/auth";

const Homepage = () => {
  return (
    <>
      <div>Homepage</div>
      <button onClick={() => auth.signOut()}>Logout</button>
    </>
  );
};

export default Homepage;
