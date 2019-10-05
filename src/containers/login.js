import React from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { connect } from "react-redux";

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };
    handleSubmit = async e => {
        e.preventDefault();
        try {
            const { email, password } = this.state;
            if (email && password) {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password);
            } else {
                throw new Error("please enter email and password");
            }
        } catch (error) {
            alert(error.message);
        }
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <div
                className="row align-items-center justify-content-center"
                style={{ height: "70vh" }}
            >
                <div className="col-4">
                    <h1>Login</h1>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            <small className="form-text text-muted">
                                We'll never share your password with anyone
                                else.
                            </small>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <Link to="/signup" className="ml-2">
                            Not Yet SignedUp? Click Here
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(Login);
