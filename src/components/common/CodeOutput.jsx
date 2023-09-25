import React, { useContext, useState } from 'react'
// import AuthContext from '../../context/AuthContextProviders';

const CodeOutput = ({sourceCode}) => {
        
    // console.log(sourceCode);
  return (
    // <div>
        <iframe id="iframe" className="w-1/2" srcDoc={sourceCode}/>
    // </div>
  )
}

export default CodeOutput