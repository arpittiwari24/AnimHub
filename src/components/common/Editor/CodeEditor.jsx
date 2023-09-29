import React, { useEffect, useRef, useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
import CodeOutput from '../CodeOutput'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'
import ComponentInfo from '../ComponentInfo'
import { PiCodeFill } from 'react-icons/pi'
// import {Icon} from 'react-icons'
// import { icons } from 'react-icons/lib'

const CodeEditor = () => {
    const [code, setcode] = useState("")
    const [activeFile, setActiveFile] = useState("HTML")
    const [html, setHtml] = useState("<h1> Helo World</h1>")
    const [css, setCss] = useState("*{\n margin: 0;\n padding: 0;\n background-color: #151515;\n color: #fff;\n}")
    const [js, setJs] = useState("// Write your code here...")

    const files = {
        "HTML": {
            name: <p className='flex items-center'><AiFillHtml5 className=' text-red-600' />HTML</p>,
            language: 'html',
            value: '<h1>Hello World</h1>'
        },
        "CSS": {
            name: <p className='flex items-center'><FaCss3Alt className=' text-blue-600' />CSS</p>,
            language: 'css',
            value: '*{\n margin: 0;\n padding: 0;\n background-color: #151515;\n color: #fff;\n}'
        },
        "JS": {
            name: <p className='flex items-center'><BiLogoJavascript className=' text-yellow-300' />JS</p>,
            language: 'javascript',
            value: "// Write your code here..."
        }
    }

    const editorRef = useRef(null)

    const handlChange = (event) => {
        if (activeFile == "HTML") {
            setHtml(editorRef.current.getValue())
        }
        if (activeFile == "CSS") {
            setCss(editorRef.current.getValue())
        }
        if (activeFile == "JS") {
            setJs(editorRef.current.getValue())
        }

    }

    useEffect(() => {
        const documentContents = `
            <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                    <script>${js}</script>
                </body>
            </html>
        `
        setcode(documentContents)

    }, [html, css, js])
    return (
        <div className='w-full h-full flex items-center justify-center gap-[15px] px-[20px]'>
            <div className='flex flex-col w-1/2 h-full gap-[5px]'>
                <div className='flex flex-row  bg-[#292929] justify-start'>
                    {Object.keys(files).map((file, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`p-1 mx-2 text-[18px] font-[600] text-[#fff] ${activeFile == file ? "text-opacity-100" : "text-opacity-40 hover:text-opacity-100"}`}
                                onClick={() => { setActiveFile(file); console.log(activeFile); }}>
                                {files[file].name}
                            </button>
                        )
                    })}
                    <PiCodeFill className='ml-auto mr-[20px] text-[#5EBE55] scale-150 self-center hover:cursor-pointer' title='Code'/>
                </div>
                <MonacoEditor
                    // ref={editorRef}
                    // height="50vh"
                    // width="50%"
                    theme='vs-dark'
                    language={files[activeFile].language}
                    path={activeFile}
                    onChange={handlChange}
                    defaultValue={files[activeFile].value || '// write your code here...'}
                    onMount={(editor, _) => {
                        editorRef.current = editor
                    }}
                />
            </div>
            <div className='flex flex-col w-1/2 h-full gap-[15px]'>
                <CodeOutput sourceCode={code} />
                <ComponentInfo />
            </div>
        </div>
    )
}

export default CodeEditor