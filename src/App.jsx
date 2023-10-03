import React from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebase/auth";
import { routesData } from "./routes";
import { Navbar, Footer } from "./components";
import AuthContextProvider from "./context/AuthContextProviders";
import { useAuthContext } from "./context/AuthContextProviders";
import ReactGA from "react-ga4";
// import Layout from "./components/Popup/Layout";

const TRACKING_ID = "G-81YMRFRDH4";

ReactGA.initialize(TRACKING_ID);

function App() {
  const { user, authloading } = useAuthContext();
  const locatar = useLocation();
  const isEditorPage = locatar.pathname === "/editor";

  return (
    <div className="dark">
      {isEditorPage ? <></> : <Navbar />}
      <Routes>
        {routesData.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              // Conditionally render routes based on authentication status
              route.authenticated && !user ? (
                // Redirect unauthenticated users to a home page or another route
                <Navigate to="/" replace={true} />
              ) : (
                <route.component />
              )
            }
            exact={true}
          />
        ))}
      </Routes>
      {isEditorPage ? <></> : <Footer />}
    </div>
  );
}

export default App;
