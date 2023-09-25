import React, { forwardRef, useEffect, useRef, useState } from 'react'
// import  from 'monaco-editor'
import MonacoEditor from '@monaco-editor/react'
import CodeOutput from '../CodeOutput'

const CodeEditor = () => {
    const [code, setcode] = useState("")
    const [activeFile, setActiveFile] = useState("index.html")
    // const editorRef = forwardRef(null)
    const [html, setHtml] = useState("<h1> Helo World</h1>")
    const [css, setCss] = useState("*{ margin: 0; padding: 0;}")
    const [js, setJs] = useState("console.log('hello world')")

    const files = {
        "index.html": {
            name: 'index.html',
            language: 'html',
            value: '<h1>Hello World</h1>'
        },
        "style.css": {
            name: 'style.css',
            language: 'css',
            value: '*{ margin: 0; padding: 0;}'
        },
        "app.js": {
            name: 'app.js',
            language: 'javascript',
            value: "console.log('hello world')"
        }
    }

    const editorRef = useRef(null)

    const handlChange = (event) => {
        // setcode(event.target.value)
        if (activeFile == "index.html") {
            setHtml(editorRef.current.getValue())
        }
        if (activeFile == "style.css") {
            setCss(editorRef.current.getValue())
        }
        if (activeFile == "app.js") {
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
        // iframe.contentWindow.document.open()
        // iframe.contentWindow.document.write(documentContents)
        // iframe.contentWindow.document.close()
        // console.log(documentContents);

    }, [html, css, js])

    // const runCode = () => {

    //     const iframe = document.getElementById('iframe')
    //     const documentContents = `
    //         <html>
    //             <head>
    //                 <style>${css}</style>
    //             </head>
    //             <body>
    //                 ${html}
    //                 <script>${js}</script>
    //             </body>
    //         </html>
    //     `
    //     iframe.contentWindow.document.open()
    //     iframe.contentWindow.document.write(documentContents)
    //     iframe.contentWindow.document.close()
    //     // console.log(documentContents);
    //     console.log(document);
    // }

    return (
        <>
            {Object.keys(files).map((file, idx) => {
                return (
                    <button key={idx} className='rounded-t-lg bg-gray-500 p-1 ml-1' onClick={() => setActiveFile(file)}>
                        {file}
                    </button>
                )
            })}
            {/* <button className='rounded-t-lg bg-gray-500 p-1 ml-1' onClick={runCode}>
                Run
            </button> */}
            <div className='flex'>
                <MonacoEditor
                    // ref={editorRef}
                    height="50vh"
                    width="50%"
                    theme='vs-dark'
                    language={files[activeFile].language}
                    path={files[activeFile].name}
                    onChange={handlChange}
                    defaultValue={files[activeFile].value || '// write your code here...'}
                    onMount={(editor, _) => {
                        editorRef.current = editor
                    }}
                />
                <CodeOutput sourceCode = {code}/>
            </div>
        </>
    )
}

export default CodeEditor