import React, { useEffect, useState } from 'react'
import Rightbar from '../Rightbar/Rightbar'
import Split from "react-split";
import Query from '../Query/Query';
import Result from '../Result/Result';
import { useTable } from '../../context/TableContext';
import LeftBar from '../Leftbar/LeftBar';
import Info from '../Info/Info';

export default function Field() {
    const [currentTable,setCurrentTable] = useState([]);

    const {table} = useTable();

    useEffect(() =>{
        setCurrentTable(table);
    },[]);

    return (
        <div style={{height:"calc(100vh - 60px)"}}>
            <Split gutterSize={5} sizes={[15,70,15]} cursor="col-resize" className="h-100 row gx-0">
                <div className="h-100">
                    <LeftBar/>
                </div>
                <div className="h-100">
                    <Split gutterSize={5} cursor="col-resize" sizes={[45,55]} className="h-100" direction="vertical">
                        <div className="w-100">
                            <Info/>
                            <div style={{height:"calc(100% - 30px)"}}>
                                <Query setCurrentTable={setCurrentTable} />
                            </div>
                        </div>
                        <div className="w-100">
                            <Result table={currentTable}/>
                        </div>
                    </Split>
                </div>
                <div className="h-100">
                    <Rightbar/>
                </div>
            </Split>
        </div>
    )
}
