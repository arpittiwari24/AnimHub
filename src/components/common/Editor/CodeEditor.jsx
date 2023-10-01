import React, { useContext, useEffect, useRef, useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
import CodeOutput from '../CodeOutput'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'
import ComponentInfo from '../ComponentInfo'
import { FaRegCopy } from 'react-icons/fa'
import { CategoryLangContext } from '../../../context/CategoryLangContextProvider'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { BiReset } from "react-icons/bi"
import toast from 'react-hot-toast'
// import {Icon} from 'react-icons'
// import { icons } from 'react-icons/lib'

const themeArray = ['vs-dark', 'vs-light', 'hc-black', 'hc-light',]

const CodeEditor = () => {
    const initialValues = {
        "html": "<h1> Hello World</h1>",
        "css": "*{\n margin: 0;\n padding: 0;\n background-color: #151515;\n color: #fff;\n}",
        "js": "// Write your code here...",
        "tailwind": "@tailwind base;\n@tailwind components;\n@tailwind utilities;"
    }
    const { langCategory } = useContext(CategoryLangContext)
    const languages = langCategory.language.split("+")
    const [code, setcode] = useState("")
    const [theme, setTheme] = useState("vs-dark")
    const [activeFile, setActiveFile] = useState("HTML")
    const [html, setHtml] = useState("<h1> Hello World</h1>")
    const [css, setCss] = useState("*{\n margin: 0;\n padding: 0;\n background-color: #151515;\n color: #fff;\n}")
    const [js, setJs] = useState("// Write your code here...")
    const [tailwind, setTailwind] = useState('@tailwind base;\n@tailwind components;\n@tailwind utilities;')

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
        },
        "Tailwind": {
            name: <p className='flex items-center'><BiLogoTailwindCss className='text-sky-400' /> Tailwind</p>,
            language: 'css',
            value: '@tailwind base;\n@tailwind components;\n@tailwind utilities;'
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
        if (activeFile == "Tailwind") {
            setTailwind(editorRef.current.getValue())
        }

    }

    useEffect(() => {
        const documentContents = `
        <html>
        <head>
        <style>${languages.includes("Tailwind") && css}</style>
        ${languages.includes("Tailwind") ? `<script src="https://cdn.tailwindcss.com"></script>` : ``}
        </head>
        <body>
        ${html}
        <script>${js}</script>
        
        </body>
        </html>
        `
        setcode(documentContents)

    }, [html, css, js, tailwind])

    const handleReset = () => {
        // setHtml(files["HTML"].value)
        // setCss(files["CSS"].value)
        // setJs(files["JS"].value)
        // setTailwind(files["Tailwind"].value)
        if (activeFile === "HTML") {
            setHtml(initialValues.html)
            editorRef.current.setValue(initialValues.html)
        }
        if (activeFile === "CSS") {
            editorRef.current.setValue(initialValues.css)
            setCss(initialValues.css)
        }
        if (activeFile === "JS") {
            setJs(initialValues.js)
            editorRef.current.setValue(initialValues.js)
        }
        if (activeFile === "Tailwind") {
            setTailwind(initialValues.tailwind)
            editorRef.current.setValue(initialValues.tailwind)
        }
    }

    const handleCopy = () => {
        if (activeFile === "HTML") {

            navigator.clipboard.writeText(html)
        }
        if (activeFile === "CSS") {
            navigator.clipboard.writeText(css)
        }
        if (activeFile === "JS") {
            navigator.clipboard.writeText(js)

        }
        if (activeFile === "Tailwind") {
            navigator.clipboard.writeText(tailwind)
        }
        toast.success(`Copied ${activeFile.toUpperCase()}`)
    }

    return (
        <div className='w-full h-full flex items-center justify-center gap-[15px]'>
            <div className='flex flex-col w-1/2 h-full gap-[5px]'>
                <div className='flex flex-row  bg-[#292929] justify-start items-center'>
                    {languages.map((fileLang, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`p-1 mx-2 text-[18px] font-[600] text-[#fff] ${activeFile == fileLang ? "text-opacity-100" : "text-opacity-40 hover:text-opacity-100"}`}
                                onClick={() => { setActiveFile(fileLang) }}>
                                {files[fileLang].name}
                            </button>
                        )
                    })}
                    <select
                        className='ml-auto mr-[30px] px-[10px] h-[90%]'
                        onChange={(e) => setTheme(e.target.value)}

                    >
                        {themeArray.map((themeName, idx) => {
                            return (
                                <option key={idx} value={themeName}>{themeName}</option>
                            )
                        })}
                    </select>
                    <FaRegCopy className='mr-[20px] text-[#5EBE55] scale-150 self-center hover:cursor-pointer' title='Copy Code' name='copy' onClick={handleCopy} />
                    <BiReset className='mr-[20px] text-red-400 scale-150 self-center hover:cursor-pointer' title='Reset Code' name='reset' onClick={handleReset} />
                </div>
                <MonacoEditor
                    theme={theme}
                    language={files[activeFile].language}
                    path={activeFile}
                    onChange={handlChange}
                    defaultValue={files[activeFile].value || '// write your code here...'}
                    // value={files[activeFile].value}
                    value={
                        activeFile === "HTML" ? html :
                            activeFile === "CSS" ? css :
                                activeFile === "JS" ? js :
                                    activeFile === "Tailwind" ? tailwind : ""
                    }
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