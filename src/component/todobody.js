import React from "react";
import Todoform from "./todoform";
import Todolist from "./todolist";

class Todobody extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Todoform />
                <Todolist />
            </React.Fragment>
        );
    }
}
export default Todobody;
