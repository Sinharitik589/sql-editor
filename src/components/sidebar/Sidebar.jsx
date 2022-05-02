import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import "./Sidebar.css";
import TableRow from './TableRow';

export default function Sidebar({tables}) {

    const [keys,setKeys] = useState([]);
    const [selected,setSelected]=useState("")
    
    useEffect(() =>{
        let keys = Object.keys(tables);
        setKeys(keys);
        setSelected(keys[0]);
    },[tables])

    return (
        <div className="w-100 h-100 border-th-right border-th-width-lg">
           <Profile/>
           {
               keys.map(val=><TableRow setSelected={setSelected} title={val} data={tables[val]} selected={selected===val} />)
           }
        </div>
    )
}
