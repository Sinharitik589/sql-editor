import React, { createRef, useRef, useState } from 'react'
import { Row , Col } from 'react-bootstrap'
import "./InputBox.css";

export default function InputBox() {

    const [text,changeText] = useState("");
    const editorRef = createRef();

    const processText = (val) => {
        
    }

    const handleTextInput = (e) => {
        processText(editorRef.current.innerText)
    }

    return (
        <div className="h-100 w-100 border-th-bottom">
            <Row className="gx-0 h-100">
                <div className="bg-th-blue h-100 p-1 line-count-container">
                    
                </div>
                <div
                className="main-text-container p-1"
                role="textbox" 
                contentEditable
                ref={editorRef} 
                onKeyDown={handleTextInput}
                />
            </Row>
        </div>
    )
}
