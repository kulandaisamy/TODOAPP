import React from "react";

class Loading extends React.Component {
    render() {
        return (
            <div
                className="row align-items-center justify-content-center"
                style={{ height: "70vh" }}
            >
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}
export default Loading;
