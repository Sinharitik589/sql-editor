import React, { useEffect , useState } from 'react'
import { Row ,Col } from 'react-bootstrap'
import { useTable } from '../../context/TableContext'
import { orderQueries } from '../../utils/Query_Helper/queryhelper'
import Button from '../Button/Button'
import InfoModal from '../InfoModal/InfoModal'
import InputBox from "../InputBox/InputBox"
import SaveModal from '../SaveModal/SaveModal'
import SectionTitle from '../SectionTitle/SectionTitle'
import TextIcon from '../Texticon/TextIcon'
import "./Query.css"

export default function Query({setCurrentTable , addToRecent , addToSaved , setMessage , saved , editSaved}) {

    const [columns,setColumns] = useState([]);
    const {table,setTable,currentQuery,setCurrentQuery} = useTable();
    const [saveModal,setSaveModal] = useState(false);
    const [infoModal , setInfoModal] = useState(false);
    const [editMode,setEditMode] = useState(false);

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

    const handleNew = () => {
        let obj = {};
        setCurrentQuery(obj);
        setCurrentTable([]);
        setMessage(null);
    }

    const handleEdit = () => {
        setEditMode(true);
        setSaveModal(true);
    }

    const handleSaveModalClose = () =>{
        setEditMode(false);
        setSaveModal(false);
    }

    const handleQueryClick = (val) =>{
        let {name,query,func,update} = val;
        let obj = {name,query,func,update};
        console.log({obj});
        setCurrentQuery(obj);
    }

    const handleQuerySave = (name,description,label) => {
        if(!editMode){
            if(name){
                let index = saved.findIndex(val=>val.title==name);
                if(index>=0) throw "Query title already exist"
                else addToSaved(currentQuery,name,description,label);
            }
            else throw "Kindly write the name for the query"
        }
        else{
            if(name){
                if(name!==currentQuery.title){
                    let index = saved.findIndex(val=>val.title==name);
                    if(index>=0) throw "Query title already exist"
                }
                let editIndex = saved.findIndex(val=>val.title==currentQuery.title);
                let saved_array = saved.slice(0);
                let query = {};
                Object.assign(query,saved_array[editIndex]);
                query.title=name;
                query.description=description;
                query.label=label;
                editSaved(editIndex,query);
                setEditMode(false);
            }
            else throw "Kindly write the name for the query"
        }
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
                       {
                          currentQuery?.type==="saved" && 
                          <div className="row gx-0 width-fit-content">
                              <TextIcon icon="fa-solid fa-file" iconStyle={{color:"#133c8b"}} textStyle={{color:"#133c8b",fontWeight:500}} text={currentQuery.title} />
                              <TextIcon onClick={() =>setInfoModal(true)} icon="fa fa-info-circle" iconStyle={{color:"#133c8b"}}/>
                          </div>
                       }
                    </div>
                    <div className="width-fit-content">
                        {
                           currentQuery.query&&(currentQuery.type==="saved" ?
                           <> 
                            <Button onClick={handleEdit}>Edit</Button></>
                            :<Button onClick={() =>setSaveModal(true)}>Save As</Button>
                            )
                        }
                        {/* <Button>Copy</Button> */}
                        <Button onClick={handleNew}>{currentQuery?.type==="saved" ?"New":"Clear"}</Button>
                    </div>
                </Row>
                <div className="inputbox-container ">
                    <InputBox value={currentQuery?.query}/>
                </div>
                <Row className="gx-0 p-1 w-100 query-tool-container justify-content-between align-items-center">
                    <Button onClick={handleRunButton}   className="bg-success btn-lg">Run Query</Button>
                    <div className="width-fit-content p-0 m-0">
                        {
                            orderQueries.map((val,index)=><Button key={`btn_${index}`} onClick={() =>handleQueryClick(val)}  className="example-btn">{val.name}</Button>)
                        }
                    </div>
                </Row>
            </Col>
            <Col md={2} className="h-100">
                <div className="border-th-left h-100 overflow-auto">
                    <SectionTitle title="Columns"/>
                    <div className="p-1">
                    {
                        columns.map((val,i)=><label key={`label_section_${i}`} className="column-name-label w-100">{val}</label>)
                    }
                    </div>
                </div>
            </Col>
            {saveModal&&<SaveModal editMode={editMode} show={true} handleSave={handleQuerySave} handleClose={handleSaveModalClose} />}
            {infoModal&&<InfoModal show={true} text={currentQuery?.description?currentQuery.description:""} onClose={() => setInfoModal(false)} />}
        </Row>
    )
}
