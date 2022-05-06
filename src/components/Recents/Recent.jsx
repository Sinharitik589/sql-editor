import React , {useState , useEffect} from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import RecentBar from './RecentBar'
import "./Recent.css"

export default function Recent({recents ,removeFromRecent}) {

    const [recent,setRecent] = useState([]);

    useEffect(() =>{
        let array = recents.slice(0);
        array.reverse();
        setRecent(array);
    },[recents.length])

    const removeElement = (index) => {
        removeFromRecent(index)
    }

    return (
        <div className="h-100">
            <SectionTitle title="Recent" />
            <div style={{height:"calc(100% - 20px)",overflowY:"auto"}} className="w-100 p-1">
                {
                    recent.map((val,i)=><RecentBar key={`recent_${i}`} index={i} recent={val} onRemove={removeElement}/>)
                }
            </div>
        </div>
    )
}
