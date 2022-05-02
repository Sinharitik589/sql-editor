import React from 'react'
import "./Button.css"
export default function Button(props) {
    return (
        <button onClick={props.onClick} style={props.style} className={`btn-th-filled ${props.className}`}>{props.children}</button>
    )
}
