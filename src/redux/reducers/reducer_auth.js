const defaultState = {
    isLogged: false,
    userDetails: {
        uid: "",
        displayName: "",
        email: ""
    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogged: true,
                userDetails: action.payload
            };
        case "LOGOUT":
            return {
                ...state,
                isLogged: false,
                userDetails: defaultState.userDetails
            };
        default:
            return state;
    }
};
