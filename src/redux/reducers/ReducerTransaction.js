const initState = {
    loading: true,
    data: []
};

export const ReducerTransaction = (state = initState, action) => {
    switch (action.type) {
        case 'SET_TRANSACTION':
            return {
                ...state,
                loading: action.loading,
                data: action.data,
            };
        case 'RESET':
            return initState
    }
    return state;
}


export const ReducerBalance = (state = initState, action) => {
    switch (action.type) {
        case 'SET_BALANCE':
            return {
                ...state,
                loading: action.loading,
                data: action.data,
            };
        case 'RESET':
            return initState
    }
    return state;
}
