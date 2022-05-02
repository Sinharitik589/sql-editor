import React , { useState , useEffect } from 'react'
import { useTable } from '../../context/TableContext'
import "./Info.css"

export default function Info() {

    const {table,tableName} = useTable();
    const [rowsNumber,setRowsNumber] = useState(0);
    const [colNumber,setColNumber] = useState(0);

    useEffect(() => {
        if(table.length>0){
            let column_array = Object.keys(table[0]);
            setColNumber(column_array.length);
            setRowsNumber(table.length);
        }
    },[table]);

    return (
        <div className="border-th-bottom border-th-width-lg top-info-container">
            Showing <span className="font-weight-bold ">{colNumber}</span> Columns
            and <span className="font-weight-bold ">{rowsNumber}</span> Rows for Table {tableName}
        </div>
    )
}
