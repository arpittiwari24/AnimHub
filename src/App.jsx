import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebase/auth";
import { routesData } from "./routes";
import { Navbar, Footer } from "./components";
import AuthContextProvider from "./context/AuthContextProviders";
import ReactGA from 'react-ga4'
// import Layout from "./components/Popup/Layout";

const TRACKING_ID = "G-81YMRFRDH4"

ReactGA.initialize(TRACKING_ID)


function App() {
  const navigator = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User logged in ");
        // navigator("/dashboard");
      } else {
        console.log("User not logged in ");
        // navigator("/");
      }
    });
  }, []);
  return (
    <div className="dark">
      <Navbar />
      <Routes>
        {routesData.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
            exact={true}
          />
        ))}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
