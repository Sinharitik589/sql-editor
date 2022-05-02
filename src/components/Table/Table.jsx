import React, { useEffect, useState } from 'react'
import SearchBox from '../SearchBox/SearchBox';
import Row from "./Row";
import SelectionBox from './SelectionBox';
import "./Table.css"
export default function Table({data=[]}) {

    const [keys,setKeys]= useState([]);
    const [currentData,setCurrentData] = useState([]);

    useEffect(() => {
        setCurrentData(data);
        if(data.length>0) setKeys(Object.keys(data[0]));
    },[data])

    return (
        <div className="w-100 h-100 overflow-auto  p-1" >
           <table className="mx-auto">
                <thead>
                    <tr>
                        <th>
                            <SelectionBox/>
                        </th>
                        {keys.map((val,i)=><th key={`th_${i}`}>{val}</th>)}
                    </tr>
                    <tr>
                        <th></th>
                        {keys.map((val,i)=><th key={`search_${i}`}>
                            <SearchBox  style={{height:20}}/>
                        </th>)}
                    </tr>
                </thead>
                <tbody>
                {
                    currentData.map((val,i)=><Row val={val} index={i} keys={keys} />)
                }
                </tbody>
           </table>
        </div>
    )
}
