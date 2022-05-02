import React, { useEffect , useState } from 'react'
import { Row ,Col } from 'react-bootstrap'
import { useTable } from '../../context/TableContext'
import Button from '../Button/Button'
import InputBox from "../InputBox/InputBox"
import SectionTitle from '../SectionTitle/SectionTitle'
import "./Query.css"

export default function Query() {

    const [columns,setColumns] = useState([])
    const {table} = useTable();

    useEffect(() =>{
        if(table.length>0){
            setColumns(Object.keys(table[0]));
        }
    },[table])

    return (
        <Row className="gx-0 h-100">
            <Col md={10} className="h-100">
                
                <Row className="gx-0 justify-content-end w-100 p-1 query-tool-container border-th-bottom">
                    <Button>Save</Button>
                    <Button>Save As</Button>
                    <Button>Clear</Button>
                    <Button>Copy</Button>
                </Row>
                <div className="inputbox-container">
                    <InputBox/>
                </div>
                <Row className="gx-0  w-100 p-1 query-tool-container">
                    <Button className="bg-success">Run </Button>
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
