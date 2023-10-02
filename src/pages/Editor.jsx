import React, { useContext, useEffect } from "react";
import { EditorContext } from "../context/EditorContextProvider";
import { DarkLogo } from ".././assets/logos/Logo";
import { Link } from "react-router-dom";
import { Button } from "../components/common";
import dummyImage from "../assets/dummyImage.jpg";
import CodeEditor from "../components/EditorComponents/CodeEditor";
import CodeOutput from "../components/EditorComponents/CodeOutput";
import ComponentInfo from "../components/EditorComponents/ComponentInfo";

const Editor = () => {
  const { data, setData } = useContext(EditorContext);
  const handleCreate = () => {
    // TODO: handleCreate
  };
  const handleUpdate = () => {
    // TODO: handleUpdate
  };

  useEffect(() => {
    console.log(data);
  });
  return (
    <>
      <div className="relative h-[100vh] py-2 px-12">
        <div className="flex items-center justify-between">
          <DarkLogo width="120px" />
          <div className="flex items-center justify-between gap-2">
            <Button label="Create" onClick={handleCreate} />
            <Button label="Update" onClick={handleUpdate} />
          </div>
          <Link className="w-12 h-12" to="/dashboard">
            <img
              src={dummyImage}
              className="w-full h-full rounded-full"
              alt=""
            />
          </Link>
        </div>
        <div className="w-full flex justify-between items-center">
          <CodeEditor category={data.category} language={data.language} />
          <div className="flex flex-col justify-center items-center">
            <CodeOutput />
            <ComponentInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
