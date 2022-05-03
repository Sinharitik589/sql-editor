import React , {createContext,useContext, useState} from "react";

const TableContext = createContext(null);

export const TableProvider = ({children,initial=[],initialTitle}) => {
    const [table,setTable] = useState(initial);
    const [tableName,setTableName] = useState(initialTitle);
    const [currentQuery,setCurrentQuery] = useState({});
    return <TableContext.Provider value={{table,setTable,tableName,setTableName,currentQuery,setCurrentQuery}}>
        {children}
    </TableContext.Provider>
}

export const useTable = () => useContext(TableContext)