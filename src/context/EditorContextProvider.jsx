import React, { useState, createContext } from "react";

export const EditorContext = createContext({});

const EditorContextProvider = ({ children }) => {
  const [data, setData] = useState({
    email: "",
    code: [],
    language: [],
    category: "",
    tags: [],
  });

  return (
    <EditorContext.Provider value={{ data, setData }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
