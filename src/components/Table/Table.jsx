import React, { useEffect, useState } from 'react'
import Products from "../../utils/data/products.json"

export default function Table() {

    const [cols, setCols] = useState([]);
    const [data,setData] = useState([]);
    const [keys,setKeys]= useState([]);
    useEffect(() => {
        let col_heading = Products.schema;
        setKeys(Object.keys(Products.data[0]));
        setData(Products.data);
        setCols(col_heading);
    },[])

    return (
        <div className="w-100 h-100 overflow-auto p-1" >
           <table className="h-100 ">
                <tr>
                    {cols.map(val=><th>{val}</th>)}
                </tr>
                {
                    data.map(val=><tr>
                       {
                           keys.map(k=><td>{val[k]}</td>)
                       }
                        </tr>)
                }
           </table>
        </div>
    )
}
