import React from "react";
import { usePopupContext } from "../../context/PopupContextProvider";
import Login from "./Login.jsx";

const Layout = ({ popup }) => {
  const { isOpen, popupContent, openPopup, closePopup } = usePopupContext();

  const handleOpenPopup = () => {
    const content = (
      <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur z-[5] p-6">
        <div className="flex justify-center items-center h-full w-full flex-col gap-4">
          {popup === "login" && <Login />}
          <button onClick={closePopup}>Close</button>
        </div>
      </div>
    );
    openPopup(content);
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Open Popup</button>
      {isOpen && (
        <div className="popup">
          <button onClick={closePopup}>Close</button>
          {popupContent}
        </div>
      )}
    </div>
  );
};

export default Layout;
