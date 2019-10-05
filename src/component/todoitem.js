import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import {
    actionDeleteItem,
    actionEditItem,
    actionCheckTodo
} from "../redux/action/action_todo";

class Todoitem extends React.Component {
    state = {
        todoText: this.props.todo,
        display: null,
        isDatePicker: false,
        deadLine: new Date(this.props.deadLine)
    };
    todoDateChange = date => {
        this.setState({ deadLine: date, display: "inline" });
    };
    todoTextChange = e => {
        this.setState({
            todoText: e.target.value,
            display: "inline"
        });
    };
    handleDelete = e => {
        let id = this.props.id;
        this.props.deleteTodoItem(id);
    };

    handleSave = e => {
        let id = this.props.id;
        let changetodo = this.state.todoText;
        let deadLine = this.state.deadLine;
        this.props.editTodoItem(id, changetodo, deadLine);
        this.setState({
            isDatePicker: false
        });
    };
    handleCancel = e => {
        this.setState({
            isDatePicker: false,
            todoText: this.props.todo
        });
    };
    handleEdit = e => {
        this.setState({
            display: "none",
            isDatePicker: true
        });
    };
    render() {
        return (
            <div className="card cards">
                <div className="card-body flexible">
                    {this.state.isDatePicker ? (
                        <React.Fragment>
                            <input
                                type="text"
                                name="text"
                                autoComplete="off"
                                value={this.state.todoText}
                                onChange={this.todoTextChange}
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

                            <button
                                type="button"
                                className="btn btn-success"
                                style={{
                                    display: this.state.display
                                }}
                                onClick={this.handleSave}
                            >
                                SAVE
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={this.handleCancel}
                            >
                                CANCEL
                            </button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={this.props.id}
                                    checked={this.props.isCompleted}
                                    disabled={this.props.isCompleted}
                                    onChange={() =>
                                        this.props.checkTodoItem(this.props.id)
                                    }
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor={this.props.id}
                                ></label>
                            </div>
                            <span className="todo-item">
                                Created{" "}
                                {moment(this.props.createdAt).calendar()}
                                <h3>
                                    <p>{this.props.todo}</p>
                                </h3>
                            </span>
                            <div className="col-auto my-1">
                                <label
                                    className="mr-sm-2 sr-only"
                                    htmlFor="inlineFormCustomSelect"
                                >
                                    Preference
                                </label>
                            </div>
                            <div
                                style={{
                                    paddingRight: "50px",
                                    paddingLeft: "50px"
                                }}
                            >
                                {this.props.isCompleted ? (
                                    <span>
                                        Completed on
                                        <p>
                                            {moment(
                                                this.props.completedAt
                                            ).calendar()}
                                        </p>
                                    </span>
                                ) : (
                                    <span>
                                        Deadline on{" "}
                                        <p>
                                            {moment(
                                                this.props.deadLine
                                            ).calendar()}
                                        </p>
                                    </span>
                                )}
                            </div>
                            <div>
                                {this.props.isCompleted ? null : (
                                    <React.Fragment>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={this.handleEdit}
                                        >
                                            <i className="fas fa-pencil-alt" />
                                        </button>
                                        &nbsp; &nbsp;
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={this.handleDelete}
                                        >
                                            <i className="fas fa-trash" />
                                        </button>
                                    </React.Fragment>
                                )}
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        );
    }
}

const mapDispatchtoProps = dispatch => ({
    deleteTodoItem: id => {
        dispatch(actionDeleteItem(id));
    },
    editTodoItem: (id, changetodo, deadLine) => {
        dispatch(actionEditItem(id, changetodo, deadLine));
    },
    checkTodoItem: id => {
        dispatch(actionCheckTodo(id));
    }
});
export default connect(
    null,
    mapDispatchtoProps
)(Todoitem);
