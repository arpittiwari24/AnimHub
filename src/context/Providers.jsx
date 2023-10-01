import React from "react";
import PopupContextProvider from "./PopupContextProvider";
import AuthContextProvider from "./AuthContextProviders";
import { Toaster } from "react-hot-toast";
import EditorContextProvider from "./EditorContextProvider";
// import Analytics from "./Analytics";

export default function Providers({ children }) {
  return (
    <div>
      {/* <Analytics /> */}
      <PopupContextProvider>
        <AuthContextProvider>
          <EditorContextProvider>{children}</EditorContextProvider>
        </AuthContextProvider>
      </PopupContextProvider>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            color: "#713200",
          },
        }}
        containerStyle={{
          top: 80,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
    </div>
  );
}
