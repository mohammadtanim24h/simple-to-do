import React from "react";

const Loading = () => {
    return (
        <div style={{height: "40vh", display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
