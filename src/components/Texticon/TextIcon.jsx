import React from 'react'
import "./TextIcon.css"

export default function TextIcon({icon,text,textStyle,iconStyle,onClick}) {
    return (
        <div className="text-icon-container">
            <span onClick={onClick?onClick:() =>{}} style={iconStyle} className="text-icon"><i className={icon}/></span>
            {text&&<span style={textStyle} className="text-icon-text">{text}</span>}
        </div>
    )
}
