import React from 'react'
import * as FileSaver from 'file-saver';
import Button from '../Button/Button';


const fileType = 'application/json';
const fileExtension = '.json';

export default function ExportJson({data}) {


    let value = JSON.stringify(data,null,2)
    const exportToCSV = () => {
    const datas = new Blob([value], { type: fileType });
        FileSaver.saveAs(datas, "patanjali" + fileExtension);
    }

    return (
        <Button onClick={exportToCSV}>Export</Button>
    )
}
