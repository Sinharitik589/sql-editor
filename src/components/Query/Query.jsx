import React, { useEffect , useState } from 'react'
import { Row ,Col } from 'react-bootstrap'
import { useTable } from '../../context/TableContext'
import { orderQueries } from '../../utils/Query_Helper/queryhelper'
import Button from '../Button/Button'
import InputBox from "../InputBox/InputBox"
import SaveModal from '../SaveModal/SaveModal'
import SectionTitle from '../SectionTitle/SectionTitle'
import "./Query.css"

export default function Query({setCurrentTable , addToRecent , addToSaved , setMessage}) {

    const [columns,setColumns] = useState([]);
    const {table,setTable,currentQuery,setCurrentQuery} = useTable();
    const [saveModal,setSaveModal] = useState(false);
    
    const callBack = (tempTable,update=false) =>{
        if(update) {
            setCurrentTable([]);
            setTable(tempTable)
        }
        else setCurrentTable(tempTable);
    }

    const handleRunButton = () =>{
        if(currentQuery.name){
            let result= currentQuery.func(table);
            let msg =result.error? {error:true,text:result.error}:{error:false,text:result.message}
            setMessage(msg);
            callBack(result.table,currentQuery.update);
            if(currentQuery.name=="Query 1") setCurrentTable(table);
            let tempObj={};
            Object.assign(tempObj,currentQuery);
            addToRecent(tempObj,msg);
        }
    }

    const handleQueryClick = (val) =>{
        setCurrentQuery(val);
    }

    const handleQuerySave = (name,description,label) => {
        addToSaved(currentQuery,name,description,label);
    }

    useEffect(() =>{
        if(table.length>0){
            setColumns(Object.keys(table[0]));
        }
    },[table])

    return (
        <Row className="gx-0 h-100">
            <Col md={10} className="h-100">
                
                <Row className="gx-0 justify-content-between w-100 p-1 border-th-bottom">
                    <div className="width-fit-content">
                       
                    </div>
                    <div className="width-fit-content">
                        <Button>Save</Button>
                        <Button onClick={() =>setSaveModal(true)}>Save As</Button>
                        <Button>New</Button>
                        <Button>Copy</Button>
                    </div>
                </Row>
                <div className="inputbox-container ">
                    <InputBox value={currentQuery?.query}/>
                </div>
                <Row className="gx-0 p-1 w-100 query-tool-container justify-content-between align-items-center">
                    <Button onClick={handleRunButton}   className="bg-success btn-lg">Run Query</Button>
                    <div className="width-fit-content p-0 m-0">
                        {
                            orderQueries.map(val=><Button onClick={() =>handleQueryClick(val)}  className="example-btn">{val.name}</Button>)
                        }
                    </div>
                </Row>
            </Col>
            <Col md={2} className="h-100">
                <div className="border-th-left h-100 overflow-auto">
                    <SectionTitle title="Columns"/>
                    <div className="p-1">
                    {
                        columns.map(val=><label className="column-name-label w-100">{val}</label>)
                    }
                    </div>
                </div>
            </Col>
            {saveModal&&<SaveModal show={true} handleSave={handleQuerySave} handleClose={() =>setSaveModal(false)} />}
        </Row>
    )
}
