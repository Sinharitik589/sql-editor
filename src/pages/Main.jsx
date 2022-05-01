import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Field from "../components/Field/Field";
import Info from "../components/Info/Info"

export default function Main() {
    return (
        <div className="w-100">
            <Navbar/>
            <Info/>
            <Field/>
        </div>
    )
}
