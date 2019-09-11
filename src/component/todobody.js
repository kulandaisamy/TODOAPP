import React from "react";
import Todoform from "./todoform";
import Todolist from "./todolist";
import uuid from "uuid/v4";

class Todobody extends React.Component {
    state = {
        todolist: []
    };
    addTodoItem = (todoText, getDate) => {
        try {
            var copylist = this.state.todolist.slice();
            copylist.push({
                id: uuid(),
                todo: todoText,
                createdAt: new Date().toISOString(),
                isCompleted: false,
                completedAt: null,
                getDate
            });
            this.setState({
                todolist: copylist
            });
            return true;
        } catch (error) {
            return false;
        }
    };

    render() {
        console.log(this.state.todolist);
        return (
            <React.Fragment>
                <Todoform addTodoItem={this.addTodoItem} />
                <Todolist todoarray={this.state.todolist} />
            </React.Fragment>
        );
    }
}
export default Todobody;
