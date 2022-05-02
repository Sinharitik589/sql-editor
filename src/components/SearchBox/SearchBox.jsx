import React from 'react'
import "./SearchBox.css"
export default function SearchBox({placeholder="",style}) {
    return (
        <div className="w-100 rounded searchbox bg-white" style={style}>
            <input placeholder={placeholder} />
        </div>
    )
}
