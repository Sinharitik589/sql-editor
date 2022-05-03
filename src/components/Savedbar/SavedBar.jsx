import React from 'react'
import { useTable } from '../../context/TableContext'
import "./SavedBar.css"
export default function SavedBar({saved}) {

    const {setCurrentQuery} = useTable();

    return (
        <div role="button" onClick={() =>setCurrentQuery(saved)} className="mt-1 w-100 saved-bar p-1 bg-white">
            <h6>{saved.title}</h6>
            <hr/>
            <p>{saved.description}</p>
            <label>{saved.label}</label>
        </div>
    )
}
