import React from "react";
import Main from "./pages/Main"
import "./App.css"
import "./css/fontawesome/all.min.css"
import "./css/fontawesome/solid.min.css"
import "./css/fontawesome/regular.min.css"
import Orders from "./utils/data/orders.json"
import { TableProvider } from "./context/TableContext";

function App() {
  return (
   <TableProvider initial={Orders} initialTitle="orders">
      <div className="vh-100 vw-100">
        <Main/>
      </div>
   </TableProvider>
  );
}

export default App;
