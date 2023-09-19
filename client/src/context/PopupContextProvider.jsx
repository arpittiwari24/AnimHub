import React, { createContext, useContext, useState } from "react";

export const PopupContext = createContext();

export const usePopupContext = () => useContext(PopupContext);

const PopupContextProvider = ({ children, initialContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(initialContent);

  const openPopup = (content) => {
    setPopupContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupContent(initialContent); // Reset content when closing the popup
  };

  return (
    <PopupContext.Provider
      value={{ isOpen, popupContent, openPopup, closePopup }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;
