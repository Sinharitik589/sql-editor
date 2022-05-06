import React, { useEffect, useState } from 'react'
import Rightbar from '../Rightbar/Rightbar'
import Split from "react-split";
import Query from '../Query/Query';
import Result from '../Result/Result';
import { useTable } from '../../context/TableContext';
import Info from '../Info/Info';
import Recent from '../Recents/Recent';
import Saved from '../Saved/Saved';

export default function Field() {
    const [currentTable,setCurrentTable] = useState([]);
    const [recents,setRecents] = useState([]);
    const [saved,setSaved] = useState([]);
    const [message,setMessage] = useState(null);
    const {setCurrentQuery} = useTable();

    const addToRecent = (query,message) =>{
        let recentArray = recents;
        query.message = message;
        recentArray.push(query);
        setRecents(recentArray);
    }

    const removeFromRecent = (index) =>{
        let array = recents.slice(0);
        let length = array.length;
        if(length>0) array.splice(length-1-index,1);
        setRecents(array);
    }

    const addToSaved = (query,name,description,label) => {
        query.type="saved";
        query.title = name;
        query.label = label;
        query.description = description;
        let savedArray = saved.splice(0);
        savedArray.push(query);
        setSaved(savedArray);
    }

    const editSaved = (index,query) =>{
        let array = saved.slice(0);
        array[index] = query;
        setCurrentQuery(query);
        setSaved(array);
    }

    return (
        <div style={{height:"calc(100vh - 60px)"}}>
            <Split gutterSize={5} sizes={[15,65,20]} cursor="col-resize" className="h-100 row gx-0">
                <div className="h-100">
                    <Recent recents={recents} removeFromRecent={removeFromRecent} />
                </div>
                <div className="h-100">
                    <Split gutterSize={5} cursor="col-resize" sizes={[45,55]} className="h-100" direction="vertical">
                        <div className="w-100">
                            <Info/>
                            <div style={{height:"calc(100% - 28px)"}}>
                                <Query saved={saved} editSaved={editSaved}  setMessage={setMessage} addToRecent={addToRecent} addToSaved={addToSaved} setCurrentTable={setCurrentTable} />
                            </div>
                        </div>
                        <div className="w-100">
                            <Result message={message} table={currentTable}/>
                        </div>
                    </Split>
                </div>
                <div className="h-100">
                    <Saved setSaved={setSaved} saved={saved}/>
                </div>
            </Split>
        </div>
    )
}
