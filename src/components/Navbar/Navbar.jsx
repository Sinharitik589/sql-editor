import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Customers from "../../utils/data/customers.json";
import Orders from "../../utils/data/orders.json";
import { useTable } from '../../context/TableContext';


export default function Navbar() {

    const {table,setTable,setTableName,tableName,setCurrentQuery} = useTable();
    const [customerTable,setCustomerTable] = useState(Customers);
    const [orderTable,setOrderTable] =useState(Orders);

    useEffect(() =>{
        let tempArray=[];
        if(tableName=="customers") {
            tempArray = customerTable.slice(0);
        }
        else {
            tempArray = orderTable.slice(0);
        }
        setTable(tempArray);
    },[tableName]);

    const handleTableChange = (name) =>{
        let tempArray;
        if(name!==tableName){
            if(tableName=="orders") {
                setOrderTable(table);
                tempArray = customerTable.slice(0);
            }
            else {
                setCustomerTable(table);
                tempArray = orderTable.slice(0);
            }
            setTable(tempArray);
            setTableName(name);
            setCurrentQuery({});
        }
        
    }

    return (
        <nav className="bg-th-blue row gx-0">
            <div className="proj-title bg-th-darkblue h-100 p-1">
                <h2 className="mb-0">SQL Editor</h2>
            </div>
            <div className="row nav-tables gx-0 align-items-end">
               <div role="button" onClick={() =>handleTableChange("orders")} className={`nav-table-name row gx-0 justify-content-center align-items-center ${tableName=="orders"?"nav-selected":""}`}>
                    Orders
               </div>
               <div role="button" onClick={() => handleTableChange("customers")} className={`nav-table-name row gx-0 justify-content-center align-items-center ${tableName=="customers"?"nav-selected":""}`}>
                    Customers
               </div>
            </div>
        </nav>
    )
}
