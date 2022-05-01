import React from 'react'
import Split from 'react-split'

export default function Query() {
    return (
        <div>
        <Split
            sizes={[25, 75]}
            minSize={100}
            expandToMin={false}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            direction="horizontal"
            cursor="col-resize"
        >
            <div>A</div>
            <div>B</div>
        </Split>
        </div>
    )
}
