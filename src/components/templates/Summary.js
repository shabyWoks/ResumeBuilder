import React from 'react';

const Summary = (props) => {
    return (
        <div className="_s_body">
            <div className="_s_body_head">Summary</div>
            <div className="_s_body_content">{props.info.summary}</div>
        </div>
    );
}

export default Summary;