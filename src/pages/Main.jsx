import React, { useState } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Field from "../components/Field/Field";
import { useTable } from '../context/TableContext';

export default function Main() {

    const [tableRecents,setTableRecents] = useState({});
    const [tableSaved,setTableSaved] = useState({});

    const {tableName} = useTable();

    const handleTabRecent  = (recents) => {
        let obj = {};
        Object.assign(obj,tableRecents);
        obj[tableName] = recents;
        setTableRecents(obj);
    }

    const handleTabSaved = (saved) => {
        let obj = {};
        Object.assign(obj,tableSaved);
        obj[tableName] = saved;
        setTableSaved(obj);
    }

    return (
        <div className="w-100">
            <Navbar/>
            <Field handleTabRecent={handleTabRecent} tableRecents={tableRecents} tableSaved={tableSaved} handleTabSaved={handleTabSaved} />
        </div>
    )
}
