const defaultState = {
    todolist: [],
    loading: true
};

export default (store = defaultState, actions) => {
    switch (actions.type) {
        case "LOAD_DATA_START":
            return {
                ...store,
                loading: true
            };
        case "LOAD_DATA_SUCESS":
            return {
                ...store,
                loading: false,
                todolist: actions.payload
            };

        default:
            return store;
    }
};
