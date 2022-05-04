import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Button from '../Button/Button';

const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const fileExtension = '.xlsx';

export default function ExportCsv({data}) {
    
    const exportToCSV = () => {
        let csvData=data;
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const datas = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(datas, "patanjali" + fileExtension);
    }

    return (
        <Button onClick={exportToCSV}>Export</Button>
    )
}
