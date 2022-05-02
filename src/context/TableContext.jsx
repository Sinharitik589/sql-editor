import React , {createContext,useContext, useState} from "react";

const TableContext = createContext(null);

export const TableProvider = ({children,initial=[],initialTitle}) => {
    const [table,setTable] = useState(initial);
    const [tableName,setTableName] = useState(initialTitle);
    return <TableContext.Provider value={{table,setTable,tableName,setTableName}}>
        {children}
    </TableContext.Provider>
}

export const useTable = () => useContext(TableContext)