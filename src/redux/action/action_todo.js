import uuid from "uuid/v4";
import { db } from "../../firebase";

export const fetch = () => {
    return async (dispatch, getstate) => {
        try {
            dispatch({
                type: "LOAD_DATA_START"
            });
            const state = getstate();
            let userid = state.auth.userDetails.uid;
            let snapshoot = await db
                .collection("TODO")
                .where("userid", "==", userid)
                .get();
            var copy = [];
            snapshoot.forEach(item => {
                copy.push(item.data());
            });
            copy.sort(
                (a, b) =>
                    new Date(a.deadLine).getTime() -
                    new Date(b.deadLine).getTime()
            );
            dispatch({
                type: "LOAD_DATA_SUCESS",
                payload: copy
            });
        } catch (error) {
            alert("something wrong");
            console.log(error);
        }
    };
};

export const actionAddTodo = (todoInput, deadLine) => {
    return async (dispatch, getstate) => {
        try {
            let state = getstate();
            let userid = state.auth.userDetails.uid;
            let newTodoList = {
                todo: todoInput,
                createdAt: new Date().toISOString(),
                isCompleted: false,
                completedAt: null,
                id: uuid(),
                deadLine,
                userid
            };
            await db
                .collection("TODO")
                .doc(newTodoList.id)
                .set(newTodoList);

            dispatch(fetch());
        } catch (error) {
            alert("something wrong");
            console.log(error);
        }
    };
};

export const actionDeleteItem = id => {
    return async dispatch => {
        try {
            await db
                .collection("TODO")
                .doc(id)
                .delete();

            dispatch(fetch());
        } catch (error) {
            alert("something wrong");
            console.log(error);
        }
    };
};
export const actionEditItem = (id, changetodo, deadLine) => {
    return async (dispatch, getstate) => {
        try {
            await db
                .collection("TODO")
                .doc(id)
                .update({
                    todo: changetodo,
                    deadLine
                });

            dispatch(fetch());
        } catch (error) {
            alert("something wrong");
            console.log(error);
        }
    };
};
export const actionCheckTodo = id => {
    return async dispatch => {
        try {
            await db
                .collection("TODO")
                .doc(id)
                .update({
                    isCompleted: true,
                    completedAt: new Date().toISOString()
                });

            dispatch(fetch());
        } catch (error) {
            alert("something wrong");
            console.log(error);
        }
    };
};
