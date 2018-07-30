import React from 'react';

const ComponentTab = (props) => {
    return (
        <div draggable onDragStart= {(e) => props.onDragStart(e, props.id)} style={{ width:'90%', height: '10rem', backgroundColor: 'blue', margin: '5%' }}>{props.id}</div>
    );
}

export default ComponentTab;