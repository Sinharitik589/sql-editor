import React, { useEffect, useState } from 'react'
import { useTable } from '../../context/TableContext';

export default function TableRow({title="",data,selected=false,setSelected}) {

    const [rowsNumber,setRowsNumber] = useState(0);
    const [colNumber,setColNumber] = useState(0);
    const [isSelected,setIsSelected] = useState(false);
    const {setTable,setTableName} = useTable();

    useEffect(() => {
        if(data.length>0){
            let column_array = Object.keys(data);
            setColNumber(column_array.length);
            setRowsNumber(data.length);
        }
    },[data]);

    useEffect(() => {
        setIsSelected(selected);
    },[selected]);

    const handleTableSelection = () => {
        setSelected(title);
        setTable(data)
        setTableName(title);
    };

    return (
        <div onClick={handleTableSelection} className={`table-row row gx-0 ${isSelected?"bg-th-darkblue text-white":""}`}>
            <div className="table-row-title col-md-9 width-fit-content">{title}</div>
        </div>
    )
}
