import React from 'react'

export default function Example({title,onClick}) {
    return (
        <button onClick={onClick}>{title}</button>
    )
}
