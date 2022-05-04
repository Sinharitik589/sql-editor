import React from 'react'

export default function SelectionBox({index,onSelect,selected=false}) {

    const handleSelect = () => {
        onSelect(index);
    }

    return (
        <div role="checkbox" onClick={handleSelect} className="checkbox bg-white">
            {selected && <i class="fa fa-check" aria-hidden="true"></i>}
        </div>
    )
}
