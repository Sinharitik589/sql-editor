import React from 'react'
import { Row , Col } from 'react-bootstrap'
import Rightbar from '../Rightbar/Rightbar'
import Split from "react-split";
import Query from '../Query/Query';
import Result from '../Result/Result';

export default function Field() {
    return (
        <div style={{height:"calc(100vh - 90px)"}}>
            <Split gutterSize={5} sizes={[80,20]} cursor="col-resize" className="h-100 row gx-0">
                <div className="h-100">
                    <Split gutterSize={5} cursor="col-resize" sizes={[45,55]} className="h-100" direction="vertical">
                        <div className="w-100">
                            <Query/>
                        </div>
                        <div className="w-100">
                            <Result/>
                        </div>
                    </Split>
                </div>
                <div className="h-100">
                    <Rightbar/>
                </div>
            </Split>
        </div>
    )
}
