import React, { useState } from 'react'
import { Row , Col } from 'react-bootstrap'
import "./InputBox.css";

export default function InputBox() {

    const [text,changeText] = useState("");

    const handleTextInput = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className="h-100 w-100 border-th-bottom">
            <Row className="gx-0 h-100">
                <div className="bg-th-blue h-100 line-count-container">
                        
                </div>
                <div
                className="main-text-container p-1"
                role="textbox" 
                contentEditable 
                value={text}
                onChange={handleTextInput}
                />
            </Row>
        </div>
    )
}
