import React, { useState, createContext } from "react";

export const EditorContext = createContext({});

const EditorContextProvider = ({ children }) => {
  const [langCategory, setLangCategory] = useState({
    category: "",
    language: "",
  });
  const [code, setCode] = useState({
    html: "",
    css: "",
    javascript: "",
    tailwind: "",
  });

  return (
    <EditorContext.Provider
      value={{ langCategory, setLangCategory, code, setCode }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
