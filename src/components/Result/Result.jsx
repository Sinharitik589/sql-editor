import React , {useEffect , useState} from 'react'
import {Row} from "react-bootstrap";
import Button from '../Button/Button'
import Table from '../Table/Table'
import "./Result.css"

export default function Result({table,message}) {

    const [exportModal,setExportModal] = useState(false);
    
    return (
        <div className="h-100">
            <div style={{height:30}} className="border-th-bottom result-info row align-items-center  gx-0 px-1">
                <div className={`col-md-9`}>
                    {message?.text&&<span className={`result-msg w-100 p-1 ${message.error?"msg-fail":"msg-success"}`}>{message.text}</span>}
                </div>
                <div className="col-md-3">
                    <Row className="gx-0 justify-content-end">
                       {Object.keys(table).length>0&&<Button onClick={() =>setExportModal(true)}>Export</Button>}
                    </Row>
                </div>
            </div>
            <div style={{height:"calc(100% - 30px)"}}>
                <Table exportModal={exportModal} setExportModal={setExportModal} data={table}/>
            </div>
        </div>
    )
}
