import React, { lazy, Suspense, useEffect, useState } from 'react'
import SearchBox from '../SearchBox/SearchBox';
import Row from "./Row";
import SelectionBox from './SelectionBox';
import "./Table.css"

const ExportModal = lazy(() =>import("../Export/ExportModal"));
export default function Table({data=[],exportModal,setExportModal}) {

    const [keys,setKeys]= useState([]);
    const [currentData,setCurrentData] = useState([]);
    const [selectionObj,setSelectionObj] = useState({});
    const [searchOptions,setSearchOptions] = useState({});

    const onSearch = (value,key) =>{
        if(Object.keys(selectionObj).length>0) setSelectionObj({});
        let tmp = searchOptions;
        if(value) tmp[key]=value;
        else delete tmp[key];
        setSearchOptions(tmp);
        runSearch(tmp);
    }

    const runSearch = (options) =>{
        if(Object.keys(selectionObj).length>0) setSelectionObj({});
        let array = data.filter(val => {
            let temp=true;
            for(let x of Object.keys(options)){
                let patt = new RegExp(options[x],"i");
                temp=temp&&patt.test(val[x]);
                if(!temp) break;
            }
            return temp;
        });
        setCurrentData(array);
    }

    const onSelect = (val) =>{
        let tempObj={}
        if(val=="all"){
            if(!selectionObj[val]){
                for(let x in currentData) tempObj[x]=true;
                tempObj["all"]=true;
                setSelectionObj(tempObj);
            }
            else{
                tempObj={}
            }
        }
        else{
            Object.assign(tempObj,selectionObj);
            if(tempObj[val]) tempObj[val]=false;
            else tempObj[val]=true;
        }
        setSelectionObj(tempObj);
    }

    useEffect(() => {
        setCurrentData(data);
        if(data.length>0) setKeys(Object.keys(data[0]));
        else setKeys([]);
    },[data])

    return (
        <>
            <div className="w-100 h-100 overflow-auto  p-1" >
                <table className="mx-auto">
                    <thead>
                        <tr>
                            {
                            keys.length>0&&
                            <th>
                                <SelectionBox index="all" selected={selectionObj["all"]} selected={selectionObj["all"]}  onSelect={onSelect}/>
                            </th>}
                            {keys.map((val,i)=><th key={`th_${i}`}>{val}</th>)}
                        </tr>
                        <tr>
                            {keys.length>0&&<th></th>}
                            {keys.map((val,i)=><th key={`search_${i}`}>
                                <SearchBox searchKey={val} onSearch={onSearch}  style={{height:20}}/>
                            </th>)}
                        </tr>
                    </thead>
                    <tbody>
                    {
                        currentData.map((val,i)=><Row key={`table_row_${i}`}  val={val} index={i} selected={selectionObj[i]} keys={keys} onSelect={onSelect} />)
                    }
                    </tbody>
                </table>
            </div>
            {exportModal &&<Suspense fallback={() =><h1>Hello</h1>}><ExportModal show={exportModal} queriedTable={data} filteredTable={currentData} selectionObj={selectionObj} handleClose={() =>setExportModal(false)}/></Suspense>}
        </>
    )
}
