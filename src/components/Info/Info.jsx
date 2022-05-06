import React , { useState , useEffect } from 'react'
import { useTable } from '../../context/TableContext'
import TextIcon from '../Texticon/TextIcon';
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
        <div className="border-th-bottom border-th-width-lg row gx-0 justify-content-end">
          {
              tableName?
              <>
              <TextIcon iconStyle={{color:"#133c8b"}} textStyle={{color:"#133c8b",fontWeight:500}} text={tableName} icon="fa fa-table"/>
              <TextIcon iconStyle={{color:"#133c8b"}} textStyle={{color:"#133c8b",fontWeight:500}} text={rowsNumber} icon="fas fa-bars"/>
              <TextIcon iconStyle={{color:"#133c8b"}} textStyle={{color:"#133c8b",fontWeight:500}} text={colNumber} icon="fa-solid fa-table-columns"/>
              </>:""
          }
        </div>
    )
}
