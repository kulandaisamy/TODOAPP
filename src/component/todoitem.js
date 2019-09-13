import React from "react";
import moment from "moment";

class Todoitem extends React.Component {
    render() {
        return (
            <div className="card cards">
                <div className="card-body flexible">
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlInline"
                            checked={this.props.isCompleted}
                            disabled={this.props.isCompleted}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="customControlInline"
                        ></label>
                    </div>
                    <span className="todo-item">
                        Created {moment(this.props.createdAt).calendar()}
                        <h3>
                            <p>{this.props.todo}</p>
                        </h3>
                    </span>
                    <div class="col-auto my-1">
                        <label
                            class="mr-sm-2 sr-only"
                            for="inlineFormCustomSelect"
                        >
                            Preference
                        </label>
                        <select
                            class="custom-select mr-sm-2"
                            id="inlineFormCustomSelect"
                        >
                            <option selected>Choose...</option>
                            <option value="high">high</option>
                            <option value="medium">medium</option>
                            <option value="low">low</option>
                        </select>
                    </div>
                    <div style={{ paddingRight: "50px", paddingLeft: "50px" }}>
                        {this.props.isCompleted ? (
                            <span>
                                Completed on
                                <p>
                                    {moment(this.props.completedAt).calendar()}
                                </p>
                            </span>
                        ) : (
                            <span>
                                Deadline on{" "}
                                <p>{moment(this.props.getDate).calendar()}</p>
                            </span>
                        )}
                    </div>
                    <div>
                        {this.props.isCompleted ? null : (
                            <React.Fragment>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    <i className="fas fa-pencil-alt" />
                                </button>
                                &nbsp; &nbsp;
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    <i className="fas fa-trash" />
                                </button>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default Todoitem;
