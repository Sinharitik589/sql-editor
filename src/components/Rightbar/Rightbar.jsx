import React from 'react'
import Recent from '../Recents/Recent'
import Saved from '../Saved/Saved'
import "./Rightbar.css"
export default function Rightbar() {
    return (
        <div className="h-100">
            <div className="h-40 border-th-bottom">
                <Recent/>
            </div>
            <div className="h-60">
                <Saved/>
            </div>
        </div>
    )
}
