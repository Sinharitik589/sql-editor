import React from "react";
import Main from "./pages/Main"
import "./App.css"
import Customers from "./utils/data/customers.json"
import Orders from "./utils/data/orders.json"
import { TableProvider } from "./context/TableContext";

function App() {
  return (
   <TableProvider initial={Orders} initialTitle="">
      <div className="vh-100 vw-100">
        <Main/>
      </div>
   </TableProvider>
  );
}

export default App;
