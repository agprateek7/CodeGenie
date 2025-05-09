import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from "axios"
import './App.css'

function App() {

  const [code, setCode] = useState(`/*Write your code here*/`)

  const [codereview, setCodereview] = useState(`/* Review will be shown here */`)

  useEffect(() => {
    prism.highlightAll();
  }, [])

  async function reviewCode() {
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code: code
    })
    setCodereview(response.data)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="coding_space">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.js)}
              padding={20}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div onClick={reviewCode} className="review_button">Review</div>
        </div>  
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{codereview}</Markdown>
        </div>
      </main>      
    </>
  ) 

}

export default App
