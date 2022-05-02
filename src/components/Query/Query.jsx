import React, { useEffect , useState } from 'react'
import { Row ,Col } from 'react-bootstrap'
import { useTable } from '../../context/TableContext'
import { orderQueries } from '../../utils/Query_Helper/queryhelper'
import Button from '../Button/Button'
import InputBox from "../InputBox/InputBox"
import SectionTitle from '../SectionTitle/SectionTitle'
import "./Query.css"



export default function Query({setCurrentTable}) {

    const [columns,setColumns] = useState([]);
    const {table,setTable} = useTable();
    const [query,setQuery] = useState("");
    const [currentQuery,setCurrentQuery]=useState({});
    
    const callBack = (tempTable,update=false) =>{
        if(update) {
            setCurrentTable([]);
            setTable(tempTable)
        }
        else setCurrentTable(tempTable);
    }

    const handleRunButton = () =>{
        if(currentQuery){
            try{
                let tempTable = currentQuery.func(table);
                console.log({tempTable});
                callBack(tempTable,currentQuery.update);
            }
            catch(e){
                console.log({e});
            }
        }
    }

    const handleQueryClick = (val) =>{
        setCurrentQuery(val);
    }

    useEffect(() =>{
        if(table.length>0){
            setColumns(Object.keys(table[0]));
        }
    },[table])

    return (
        <Row className="gx-0 h-100">
            <Col md={10} className="h-100">
                
                <Row className="gx-0 justify-content-end w-100 p-1 border-th-bottom">
                    <Button>Save</Button>
                    <Button>Save As</Button>
                    <Button>Clear</Button>
                    <Button>Copy</Button>
                </Row>
                <div className="inputbox-container ">
                    <InputBox value={currentQuery?.query}/>
                </div>
                <Row className="gx-0 p-1 w-100 query-tool-container justify-content-between align-items-center">
                    <Button onClick={handleRunButton} style={{height:30,width:80}}  className="bg-success">Run Query</Button>
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
        </Row>
    )
}
