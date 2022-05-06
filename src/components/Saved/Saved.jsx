import React, { useEffect , useState} from 'react'
import { useTable } from '../../context/TableContext';
import DeleteModal from '../DeleteModal/DeleteModal';
import SavedBar from '../Savedbar/SavedBar'
import SearchBox from '../SearchBox/SearchBox'
import SectionTitle from '../SectionTitle/SectionTitle'

export default function Saved({saved,setSaved}) {

    const [tempSaved,setTempSaved] = useState(saved);
    const [currentDelete,setCurrentDelete] = useState(null);
    const [deleteModal,setDeleteModal] = useState(false);
    const {currentQuery,setCurrentQuery} = useTable();

    const handleDelete = (value) =>{
        setCurrentDelete(value);
        setDeleteModal(true);
    }

    const onDelete = () =>{
        let array = saved.slice(0);
        let index = array.findIndex(val=>val.title==currentDelete);
        if(index>=0) array.splice(index,1);
        if(currentQuery.type=="saved"&&currentQuery.title==currentDelete) setCurrentQuery({});
        setSaved(array);
        setDeleteModal(false);
    }

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
                    tempSaved.map(val=><SavedBar handleDelete={handleDelete} saved={val}/>)
                }
                </div>
            </div>
            {deleteModal && <DeleteModal  show={true} title="Delete Saved Query" body={`Are you sure you want to delete this query titled ${currentDelete} ?`} onClose={() =>setDeleteModal(false)} onDelete={onDelete} />}
        </div>
    )
}
