import React from 'react'
import SavedBar from '../Savedbar/SavedBar'
import SearchBox from '../SearchBox/SearchBox'
import SectionTitle from '../SectionTitle/SectionTitle'

export default function Saved({saved}) {

    

    return (
        <div className="w-100 h-100">
            <SectionTitle title="Saved" />
            <div style={{height:"calc(100% - 30px)"}} className="w-100 p-1 bg-th-side-blue">
                <SearchBox/>
                {
                saved.map(val=><SavedBar saved={val}/>)
                }
            </div>
            
        </div>
    )
}
