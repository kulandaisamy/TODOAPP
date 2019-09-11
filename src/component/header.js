import React from "react";
import logo from "../image/list.svg";
import moment from "moment";

class Header extends React.Component {
    state = {
        time: moment().format("MMMM Do YYYY h:mm:ss a")
    };
    componentDidMount() {
        setInterval(() => {
            this.setState({ time: moment().format("MMMM Do YYYY h:mm:ss a") });
        }, 1000);
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark header">
                <span
                    className="navbar-brand"
                    href="#"
                    style={{ fontSize: 27 }}
                >
                    <img
                        src={logo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt="LOGO"
                    />
                    &nbsp;TODO
                </span>
                <span style={{ color: "white" }}>{this.state.time}</span>
            </nav>
        );
    }
}

export default Header;
