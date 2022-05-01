import React from 'react'
import { Row ,Col } from 'react-bootstrap'
import Button from '../Button/Button'
import InputBox from "../InputBox/InputBox"
import "./Query.css"

export default function Query() {
    return (
        <Row className="gx-0 h-100">
            <Col md={10} className="h-100">
                <Row className="gx-0 justify-content-end w-100 p-1 query-tool-container border-th-bottom">
                    <Button>Save</Button>
                    <Button>Save As</Button>
                    <Button>Delete</Button>
                    <Button>Copy</Button>
                </Row>
                <div className="inputbox-container">
                    <InputBox/>
                </div>
                <Row className="gx-0  w-100 p-1 query-tool-container">
                    <Button className="bg-success">Run </Button>
                </Row>
            </Col>
            <Col md={2}>
                <div className="border-th-left h-100">

                </div>
            </Col>
        </Row>
    )
}
