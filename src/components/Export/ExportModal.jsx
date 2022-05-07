import React, { useEffect, useState } from 'react';
import { Form, Row } from "react-bootstrap";
import Button from '../Button/Button';
import OverLay from '../Overlay/OverLay';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import "./ExportModal.css";

export default function ExportModal({show,queriedTable,filteredTable,selectionObj,handleClose}) {

    const dataTypes = ["Queried","Filtered","Selected"];
    const fileTypes = ["EXCEL","JSON"];
    const [fileName,setFileName] = useState("");
    const [fileNameError,setFileNameError] = useState(false);
    const [dataType,setDataType] = useState(0);
    const [fileType,setFileType] = useState(0);
    const [row,setRow]=useState(0);
    const [col,setCol] = useState(0);
    const [currentTable,setCurrentTable] = useState([]);
    const [disabled,setDisabled] = useState(false);

    const handleFileName = (e) => {
        setFileNameError(false);
        setFileName(e.target.value);
    }

    useEffect(() =>{
        switch(dataType){
            case 0:
                setCurrentTable(queriedTable.slice(0))
                break;
            case 1:
                setCurrentTable(filteredTable.slice(0))
                break;
            case 2:
                let array = filteredTable.filter((val,index)=>selectionObj[index]);
                setCurrentTable(array);
                break;

        }
    },[dataType])

    useEffect(() =>{
        let cols=0,rows=0;
        console.log({currentTable})
        if(currentTable.length>0){
            cols = Object.keys(currentTable[0]).length;
            rows=currentTable.length;
        }
        if(rows==0) setDisabled(true);
        else setDisabled(false);
        setCol(cols);
        setRow(rows);
    },[currentTable])

    const exportData = () => {
        if(!fileName) {
            setFileNameError(true)
            return;
        }
        let finalData = null,fileExtension="";
        if(fileType==0){
            const ws = XLSX.utils.json_to_sheet(currentTable);
            const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
            const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            finalData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
            fileExtension=".xlsx";
        }
        else{
            const value = JSON.stringify(currentTable,null,2)
            finalData = new Blob([value], { type: 'application/json' });
            fileExtension=".json";
        }
        FileSaver.saveAs(finalData, fileName + fileExtension);
    }

    return (
        <OverLay show={show}>
            <div className="export-modal">
                <h5>Export Table</h5>
                <hr/>
                <Form.Group>
                    <Form.Label>
                        File Name
                    </Form.Label>
                    <Form.Control
                    type="text"
                    value={fileName}
                    onChange={handleFileName}
                    />
                    {
                        fileNameError&&<Form.Text className="text-danger">Enter Name Of The File To Be Exported</Form.Text>
                    }
                </Form.Group>
                <Form.Label>
                    Select Data
                </Form.Label>
                <Row className="gx-0  mb-1">
                    {
                        dataTypes.map((val,index)=><div role="button" onClick={() =>setDataType(index)} className={`export-type-btn ${index==dataType&&"export-selected"}`}>{val}</div>)
                    }
                </Row>
                <Form.Label>
                    Export Type
                </Form.Label>
                <Row className="gx-0  mb-1">
                    {
                        fileTypes.map((val,index)=><div role="button" onClick={() =>setFileType(index)} className={`export-type-btn ${index==fileType&&"export-selected"}`}>{val}</div>)
                    }
                </Row>
                <hr />
                <h6>{row} Rows and {col} Columns selected</h6>
                <Row className="gx-0  mt-3">
                    <Button onClick={exportData} disabled={disabled}  className={`bg-success btn-lg ${disabled&&"disabled"}`}>Export</Button>
                    <Button onClick={handleClose}   className="bg-secondary text-white btn-lg ml-1" >Cancel</Button>
                </Row>


            </div>
        </OverLay>
    )
}
