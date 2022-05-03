import React , {useState , useEffect} from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import RecentBar from './RecentBar'
import "./Recent.css"

export default function Recent({recents}) {

    const [recent,setRecent] = useState([]);

    useEffect(() =>{
        let array = recents.slice(0);
        array.reverse();
        setRecent(array);
    },[recents.length])

    return (
        <div className="h-100">
            <SectionTitle title="Recent" />
            <div style={{height:"calc(100% - 20px)",overflowY:"auto"}} className="w-100">
                {
                    recent.map((val,i)=><RecentBar key={`recent_${i}`} recent={val}/>)
                }
            </div>
        </div>
    )
}
