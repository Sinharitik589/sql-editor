import React from 'react'
import OverLay from '../Overlay/OverLay'

export default function InfoModal({show,text,onClose}) {
    return (
        <OverLay show={show} onClose={onClose}>
            <p>{text}</p>
        </OverLay>
    )
}
