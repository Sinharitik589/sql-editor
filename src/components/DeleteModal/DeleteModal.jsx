import React from 'react'
import { Modal } from 'react-bootstrap'
import Button from '../Button/Button'

export default function DeleteModal({title,body,onDelete,onClose,show}) {
    return (
        <div>
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{body}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onClose} className="bg-secondary text-white btn-lg">Close</Button>
                    <Button onClick={onDelete} className="bg-danger btn-lg">Delete</Button>
                </Modal.Footer>
            </Modal>   
        </div>
    )
}
