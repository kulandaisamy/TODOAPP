export const userAuth = userDetails => {
    return dispatch => {
        try {
            if (userDetails) {
                dispatch({
                    type: "LOGIN",
                    payload: userDetails
                });
            } else {
                dispatch({
                    type: "LOGOUT"
                });
            }
        } catch (error) {
            alert("something went wrong");
        }
    };
};
