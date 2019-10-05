import React from "react";
import Todoitem from "./todoitem";
import { connect } from "react-redux";
import { fetch } from "../redux/action/action_todo";
import Loading from "../component/loading";

class Todolist extends React.Component {
    componentDidMount() {
        this.props.fetch();
    }
    render() {
        if (this.props.loading) {
            return <Loading />;
        }
        return (
            <div>
                {this.props.todolist.map((item, index) => {
                    return <Todoitem key={index} index={index} {...item} />;
                })}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { todolist: state.todo.todolist, loading: state.todo.loading };
};
const maoDispatchToProps = dispatch => ({
    fetch: () => {
        dispatch(fetch());
    }
});
export default connect(
    mapStateToProps,
    maoDispatchToProps
)(Todolist);
