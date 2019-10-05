import React from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";

import Loading from "../component/loading";
import { connect } from "react-redux";

class SignUp extends React.Component {
    state = {
        email: "",
        name: "",
        password: ""
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = async e => {
        e.preventDefault();
        try {
            const { name, email, password } = this.state;
            if (!name && email && password) {
                throw new Error("please enter a string");
            }
            console.log(email, name, password);
            let data = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            data.user.updateProfile({ displayName: name });

            if (data) {
                if (this.props.loading) {
                    return <Loading />;
                }
                this.props.history.replace("/");
            }
        } catch (error) {
            alert(error.message);
        }
    };
    render() {
        return (
            <div
                className="row align-items-center justify-content-center"
                style={{ height: "70vh" }}
            >
                <div className="col-6">
                    <h1>SignUp</h1>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    name="email"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputAddress">USER Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="YOUR NAME"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    name="name"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    name="password"
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                        <Link to="/" className="ml-2">
                            Login
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loading: state.todo.loading
});
//const mapDispatchToProps = () => {};
export default connect()(SignUp);
