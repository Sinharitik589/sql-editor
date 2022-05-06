import React, { createRef, useEffect, useRef, useState } from 'react'
import { Row , Col } from 'react-bootstrap'
import "./InputBox.css";

export default function InputBox({value}) {

    const [text,changeText] = useState("");
    const editorRef = createRef();


    const handleTextInput = (e) => {
        changeText(e.target.value);
    }

    useEffect(() =>{
        changeText(value);
    },[value])

    return (
        <div className="h-100 w-100 border-th-bottom">
            <Row className="gx-0 h-100">
                {/* <div className="bg-th-blue h-100 p-1 line-count-container">
                    
                </div> */}
                <textarea
                disabled
                className="main-text-container p-1 h-100"
                value={text?text:""}
                onChange={handleTextInput}
                />
            </Row>
        </div>
    )
}
