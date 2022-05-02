import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import SectionTitle from '../SectionTitle/SectionTitle'

export default function Saved() {
    return (
        <div className="w-100 h-100">
            <SectionTitle title="Saved" />
            <div style={{height:"calc(100% - 30px)"}} className="w-100 p-1">
                <SearchBox/>
            </div>
        </div>
    )
}
