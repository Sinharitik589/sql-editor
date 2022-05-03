import React from 'react'
import { Modal } from 'react-bootstrap'

export default function OverLay({show,children}) {
    return (
        <div>
            <Modal
            size="md"
            show={show}
            centered
            >
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </div>
    )
}
