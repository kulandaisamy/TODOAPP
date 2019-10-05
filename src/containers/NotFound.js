import React from "react";
import { Link } from "react-router-dom";

class Notfound extends React.Component {
    render() {
        return (
            <div
                className="row align-items-center justify-content-center w-100"
                style={{ height: "50vh" }}
            >
                <div className="col" style={{ textAlign: "center" }}>
                    <h1>404</h1>
                    <p>NOT FOUND</p>
                    <Link to="/" className="btn btn-success">
                        Go To Home
                    </Link>
                </div>
            </div>
        );
    }
}

export default Notfound;
