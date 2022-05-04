import React, { useEffect , useState} from 'react'
import SavedBar from '../Savedbar/SavedBar'
import SearchBox from '../SearchBox/SearchBox'
import SectionTitle from '../SectionTitle/SectionTitle'

export default function Saved({saved}) {

    const [tempSaved,setTempSaved] = useState(saved);

    const searchQuery = (value) =>{
        let patt = new RegExp(value,"i");
        let array = saved.filter(val => patt.test(val.label)||patt.test(val.title));
        setTempSaved(array);
    }

    useEffect(() =>{
        let array = saved.slice(0);
        setTempSaved(array);
    },[saved])

    return (
        <div className="w-100 h-100">
            <SectionTitle title="Saved" />
            <div style={{height:"calc(100% - 20px)"}} className="w-100 p-1 bg-th-side-blue">
                <SearchBox onSearch={searchQuery} />
                <div style={{overflowY:"auto",height:"calc(100% - 32px)"}}>
                {
                    tempSaved.map(val=><SavedBar saved={val}/>)
                }
                </div>
            </div>
            
        </div>
    )
}
