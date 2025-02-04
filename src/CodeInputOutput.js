import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeInputOutput = () => {
  // State to hold the input code and the output
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  // Handle input change
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  // Handle output button click to evaluate code (if applicable)
  const handleRunCode = () => {
    try {
      // For simplicity, we'll use eval() for JavaScript code execution
      // WARNING: This is not recommended in production as it can execute malicious code.
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="code-input-output">
      <h2>Code Input & Output</h2>

      <textarea
        value={code}
        onChange={handleCodeChange}
        placeholder="Type your code here..."
        rows="10"
        cols="50"
      />

      <br />
      <button onClick={handleRunCode}>Run Code</button>

      <h3>Output:</h3>
      <div>
        <pre>
          <SyntaxHighlighter language="javascript" style={solarizedlight}>
            {output}
          </SyntaxHighlighter>
        </pre>
      </div>

      <h3>Code Input:</h3>
      <div>
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeInputOutput;
