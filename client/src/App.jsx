import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase/auth";
import Homepage from "./components/Homepage";

function App() {
  const navigator = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User logged in ");
        navigator("/");
      } else {
        console.log("User not logged in ");
        navigator("/login");
      }
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
