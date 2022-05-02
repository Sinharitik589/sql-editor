import React , {useEffect , useState} from 'react'
import Table from '../Table/Table'

export default function Result({table}) {

return (
        <div className="h-100">
            <div style={{height:30}} className="border-th-bottom result-info">
                Result
            </div>
            <div style={{height:"calc(100% - 30px)"}}>
                <Table data={table}/>
            </div>
        </div>
    )
}
