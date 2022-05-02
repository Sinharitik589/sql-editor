import React from 'react'
import "./Navbar.css"
import Customers from "../../utils/data/customers.json";
import Orders from "../../utils/data/orders.json";

const tableObjects = {
    Customers,Orders
} 

export default function Navbar() {

    return (
        <nav className="bg-th-blue">
            <div className="proj-title bg-th-darkblue h-100">

            </div>
        </nav>
    )
}
