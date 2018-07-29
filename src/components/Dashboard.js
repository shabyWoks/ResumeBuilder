import React from 'react';

const Dashboard = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.history.push("/resume-builder");
            }} >Hello</button>
        </div>
    );
}

export default Dashboard;