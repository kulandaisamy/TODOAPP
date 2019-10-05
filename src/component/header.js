import React from "react";
import logo from "../image/list.svg";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "../firebase";

class Header extends React.Component {
    state = {
        time: moment().format("MMMM Do YYYY h:mm A")
    };
    componentDidMount() {
        setInterval(() => {
            this.setState({ time: moment().format("MMMM Do YYYY h:mm A") });
        }, 1000);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
                <Link className="navbar-brand" to="/" style={{ fontSize: 27 }}>
                    <img
                        src={logo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt="LOGO"
                    />
                    &nbsp;TODO
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li
                            className={`nav-item ${
                                window.location.pathname === "/" ? "active" : ""
                            }`}
                        >
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li
                            className={`nav-item ${
                                window.location.pathname === "/aboutus"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link className="nav-link" to="/aboutus">
                                About <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <>
                    {this.props.isLogged ? (
                        <div className="dropdown">
                            <span
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{
                                    color: "white",
                                    marginRight: 40,
                                    cursor: "pointer"
                                }}
                            >
                                {this.props.userDetails}
                            </span>

                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <span
                                    onClick={() => firebase.auth().signOut()}
                                    className="dropdown-item"
                                    style={{
                                        cursor: "pointer"
                                    }}
                                >
                                    LOGOUT
                                </span>
                            </div>
                        </div>
                    ) : null}
                </>
                <span style={{ color: "white" }}>{this.state.time}</span>
            </nav>
        );
    }
}
const mapStateToProps = state => ({
    isLogged: state.auth.isLogged,
    userDetails: state.auth.userDetails.displayName
});
export default connect(mapStateToProps)(Header);
