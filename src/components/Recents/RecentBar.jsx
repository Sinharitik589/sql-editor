import React from 'react'
import { useTable } from '../../context/TableContext'
export default function RecentBar({recent}) {
   
    const {setCurrentQuery} = useTable()

    return (
        <div   className="w-100 recent-bar bg-white p-1">
            <div role="button" onClick={() =>setCurrentQuery(recent)} className="query-title w-100">
                {recent.query}
            </div>
            <div className={`w-100 query-msg ${recent.message.error?"query-fail":"query-success"}`}>
               {recent.message.text}
            </div>
        </div>
    )
}
