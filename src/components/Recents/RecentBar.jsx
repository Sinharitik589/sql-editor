import React from 'react'
import { useTable } from '../../context/TableContext'
export default function RecentBar({recent , index , onRemove}) {
   
    const {setCurrentQuery} = useTable();

    const handleRemove = () => onRemove(index);

    return (
        <div  className="w-100 recent-bar bg-white p-1 mb-1">
            <div className="row gx-0 justify-content-end">
                <i role="button" onClick={handleRemove} class="fa fa-times text-secondary width-fit-content" aria-hidden="true"></i>
            </div>
            <div role="button" onClick={() =>setCurrentQuery(recent)} className="query-title w-100">
                {recent.query}
            </div>
            <div className={`w-100 query-msg ${recent.message.error?"query-fail":"query-success"}`}>
               {recent.message.text}
            </div>
        </div>
    )
}
