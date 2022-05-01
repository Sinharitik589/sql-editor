import React from 'react'
import "./SearchBox.css"
export default function SearchBox({placeholder=""}) {
    return (
        <div className="w-100 rounded searchbox">
            <input placeholder={placeholder} />
        </div>
    )
}
