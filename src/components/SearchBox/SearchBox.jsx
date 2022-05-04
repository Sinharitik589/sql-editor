import React, { useEffect, useState } from 'react'
import "./SearchBox.css"
export default function SearchBox({placeholder="",style,onSearch,searchKey=""}) {

    const [searchText,setSearchText] = useState("");

    useEffect(() =>{
        if(onSearch) onSearch(searchText,searchKey);
    },[searchText])

    return (
        <div className="w-100 rounded searchbox bg-white" style={style}>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder={placeholder} />
        </div>
    )
}
