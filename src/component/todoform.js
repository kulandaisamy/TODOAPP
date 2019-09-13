import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Todoform extends React.Component {
    state = {
        todoText: "",
        getDate: ""
    };
    todoDateChange = date => {
        this.setState({ getDate: date });
    };
    todoTextChange = e => {
        this.setState({ todoText: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.todoText) {
            if (this.state.getDate) {
                let todoText = this.state.todoText;
                let getDate = this.state.getDate.toISOString();
                var IsSuccess = this.props.addTodoItem(todoText, getDate);
                if (IsSuccess) {
                    this.setState({ getDate: "", todoText: "" });
                } else {
                    alert("hai");
                }
            } else {
                alert("ENTER DATE");
            }
        } else {
            alert("ENTER STRING");
        }
    };
    render() {
        return (
            <nav>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <div className="input-group mb-3 todoform">
                        <input
                            type="text"
                            name="todoinput"
                            onChange={this.todoTextChange}
                            value={this.state.todoText}
                            className="form-control"
                            placeholder="ENTER UR TASK"
                            autoComplete="off"
                        />
                        <DatePicker
                            onChange={this.todoDateChange}
                            selected={this.state.getDate}
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

export default Todoform;
