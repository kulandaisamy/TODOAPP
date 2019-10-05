import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./containers/dashboard";
import Aboutus from "./containers/Aboutus";
import Login from "./containers/login";
import SignUp from "./containers/signup";
import Notfound from "./containers/NotFound";
import { connect } from "react-redux";

import firebase from "./firebase";

import { userAuth } from "./redux/action/action_auth";

class Routes extends React.Component {
    state = {
        loading: true
    };
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.userAuth({
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                this.props.userAuth(null);
            }
            this.setState({ loading: false });
        });
    }
    render() {
        if (this.state.loading) {
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
        return (
            <>
                <>
                    {this.props.LogIn ? (
                        <Switch>
                            <Route path="/" component={Dashboard} exact />
                            <Route path="/aboutus" component={Aboutus} />
                            <Route path="*" component={Notfound} />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path="/" component={Login} exact />
                            <Route path="/signup" component={SignUp} exact />
                            <Route path="/aboutus" component={Aboutus} />
                            <Route path="*" component={Notfound} />
                        </Switch>
                    )}
                </>
            </>
        );
    }
}
const mapStateToProps = state => ({
    LogIn: state.auth.isLogged
});
const mapDispatchToProps = dispatch => ({
    userAuth: userDetails => dispatch(userAuth(userDetails))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);
