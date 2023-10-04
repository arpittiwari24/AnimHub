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
  const [tags, setTags] = useState([]);

  return (
    <EditorContext.Provider
      value={{ langCategory, setLangCategory, code, setCode, tags, setTags }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
