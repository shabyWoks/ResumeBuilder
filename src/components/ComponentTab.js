import React from 'react';

const ComponentTab = (props) => {
    return (
        <div className="comp_tab" draggable onDragStart= {(e) => props.onDragStart(e, props.id)}>{props.id}</div>
    );
}

export default ComponentTab;