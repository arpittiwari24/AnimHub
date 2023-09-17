import React from "react";

const Modal = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur z-[5] p-6">
        <div className="flex justify-center items-center h-full w-full flex-col gap-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
