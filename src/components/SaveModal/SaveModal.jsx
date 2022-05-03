import React, { useState } from 'react'
import { Form ,Row , Col} from 'react-bootstrap'
import { useTable } from '../../context/TableContext'
import Button from '../Button/Button'
import OverLay from '../Overlay/OverLay'
import "./SaveModal.css"

export default function SaveModal({show,handleClose,handleSave}) {

    const {currentQuery} = useTable();
    const [title,setTitle] = useState("");
    const [label,setLabel] = useState("");
    const [description,setDescription] = useState("");
    const [titleError,setTitleError] = useState(false);

    const handleDescription = (e) => setDescription(e.target.value);

    const handleTitle = (e) => setTitle(e.target.value);

    const handleLabel = (e) =>  setLabel(e.target.value);

    const save = () =>{
        if(title){
            handleSave(title,description,label);
            handleClose()
        }
        else setTitleError(true);
    }

    return (
        <OverLay show={show}>
            <Row className="mb-1">
                <Col md={12}>
                <div className="w-100 save-query p-2 bg-th-side-blue">
                    {
                        currentQuery?.query
                    }
                </div>
                </Col>
            </Row>
            <Row>
                <Col md={7}>
                     <Form.Group>
                        <Form.Label htmlFor="save-name">Name</Form.Label>
                        <Form.Control
                        type="text"
                        value={title}
                        maxLength={50}
                        onChange={handleTitle}
                        id="save-name"
                        />
                       {
                           titleError&&<Form.Text>Enter title for the file</Form.Text>
                       }
                    </Form.Group>
                </Col>
                <Col md={5}>
                    <Form.Group>
                        <Form.Label htmlFor="save-label">Label</Form.Label>
                        <Form.Control
                        type="text"
                        id="save-label"
                        maxLength={20}
                        value={label}
                        onChange={handleLabel}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Form.Group>
                        <Form.Label htmlFor="save-desc">Description</Form.Label>
                        <Form.Control
                        type="text"
                        as="textarea"
                        id="save-desc"
                        maxLength={200}
                        value={description}
                        onChange={handleDescription}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mt-1 gx-0 justify-content-end">
                <Button onClick={handleClose} className="mr-1" style={{height:30,width:80}} className="bg-secondary text-white" >Cancel</Button>
                <Button onClick={save} style={{height:30,width:80}}  >Save</Button>
            </Row>
        </OverLay>
    )
}
