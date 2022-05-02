import React from "react";
import Main from "./pages/Main"
import "./App.css"
import Customers from "./utils/data/customers.json"
import { TableProvider } from "./context/TableContext";

function App() {
  return (
   <TableProvider initial={Customers} initialTitle="Customers">
      <div className="vh-100 vw-100">
        <Main/>
      </div>
   </TableProvider>
  );
}

export default App;
