import React from "react";
import Todoitem from "./todoitem";

class Todolist extends React.Component {
    render() {
        return (
            <div>
                {this.props.todoarray.map(item => {
                    return <Todoitem {...item} />;
                })}
            </div>
        );
    }
}
export default Todolist;
