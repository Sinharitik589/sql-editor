import React from 'react'
import Table from '../Table/Table'

export default function Result() {
    return (
        <div className="h-100">
            <div style={{height:30}} className="border-th-bottom">

            </div>
            <div style={{height:"calc(100% - 30px)"}}>
                <Table/>
            </div>
        </div>
    )
}
