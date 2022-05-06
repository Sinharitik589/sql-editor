import React from 'react'
import { Modal } from 'react-bootstrap'
import './OverLay.css'

export default function OverLay({show,children,onClose}) {
    return (
        <div>
            <Modal
            size="md"
            show={show}
            centered
            >
                <Modal.Body>
                    {
                        onClose && <div  className="w-100 row gx-0 justify-content-end mb-1">
                        <span role="button" onClick={onClose} className="width-fit-content">
                            <i class="fa fa-window-close close-icon" aria-hidden="true"></i>
                        </span>
                    </div>
                    }
                    {children}
                </Modal.Body>
            </Modal>
        </div>
    )
}
