import React from "react";

const Loading = () => {
    return (
        <div style={{height: "60vh", display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Loading;
