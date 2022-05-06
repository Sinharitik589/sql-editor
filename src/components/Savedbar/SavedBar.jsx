import React from 'react'
import { Row } from 'react-bootstrap';
import { useTable } from '../../context/TableContext'
import "./SavedBar.css"
export default function SavedBar({saved , handleDelete}) {

    const {setCurrentQuery} = useTable();

    return (
        <div   className="mt-1 w-100 saved-bar p-1 bg-white">
            <h6 role="button" onClick={() =>setCurrentQuery(saved)}>{saved.title}</h6>
            <hr/>
            <p>{saved.description}</p>
            <Row className="gx-0 justify-content-between mt-1">
                <label className="width-fit-content">{saved.label}</label>
                <span role="button" className="width-fit-content">
                    <i className="fa fa-trash text-danger" onClick={() =>handleDelete(saved.title)} aria-hidden="true"></i>
                </span>
            </Row>
        </div>
    )
}
