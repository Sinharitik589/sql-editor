import React from 'react'
import SelectionBox from './SelectionBox'

export default function Row({keys,val,index,onSelect,selected}) {
    return (
        <tr>
            <td>
                <SelectionBox selected={selected} onSelect={onSelect} index={index}/>
            </td>
            {
                keys.map((k,i)=><td key={`td_${index}_${i}`}>{val[k]}</td>)
            }
        </tr>
    )
}
