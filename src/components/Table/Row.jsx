import React from 'react'
import SelectionBox from './SelectionBox'

export default function Row({keys,val,index}) {
    return (
        <tr>
            <td>
                <SelectionBox/>
            </td>
            {
                keys.map((k,i)=><td key={`td_${index}_${i}`}>{val[k]}</td>)
            }
        </tr>
    )
}
