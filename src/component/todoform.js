import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { actionAddTodo } from "../redux/action/action_todo";

class Todoform extends React.Component {
    state = {
        todoText: "",
        deadLine: ""
    };
    todoDateChange = date => {
        this.setState({ deadLine: date });
    };
    todoTextChange = e => {
        this.setState({ todoText: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.todoText) {
            if (this.state.deadLine) {
                let todoText = this.state.todoText;
                let deadLine = this.state.deadLine.toISOString();
                this.props.addTodoItem(todoText, deadLine);
                if ((todoText, deadLine)) {
                    this.setState({
                        deadLine: "",
                        todoText: ""
                    });
                } else {
                    alert("failed to reset");
                }
            } else {
                alert("ENTER DATE");
            }
        } else {
            alert("ENTER STRING");
        }
    };
    render() {
        this.value = this.state.todoText;
        return (
            <nav>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <div className="input-group mb-3 todoform">
                        <input
                            type="text"
                            id="todotext"
                            name="todoinput"
                            onChange={this.todoTextChange}
                            value={this.state.todoText}
                            className="form-control"
                            placeholder="ENTER UR TASK"
                            autoComplete="off"
                        />
                        <DatePicker
                            onChange={this.todoDateChange}
                            selected={this.state.deadLine}
                            className="form-control"
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            placeholderText="Select Date"
                            name="datepicker"
                            autoComplete="off"
                            todayButton="Today"
                        />

                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                                ADD TASK
                            </button>
                        </div>
                    </div>
                </form>

                <span
                    style={{ position: "absolute", top: 260, left: "54%" }}
                ></span>
            </nav>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addTodoItem: (todoText, deadLine) => {
        dispatch(actionAddTodo(todoText, deadLine));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(Todoform);
