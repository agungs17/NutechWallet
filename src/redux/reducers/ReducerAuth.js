const initStateProfile = {
    isLogin: false,
    token: '',
    profile: ''
};

export const ReducerAuth = (state = initStateProfile, action) => {
    switch (action.type) {
        case 'IS_LOGIN':
            return {
                ...state,
                isLogin: action.isLogin,
                token: action.token,
                profile: action.profile
            };
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'RESET':
            return initStateProfile
    }
    return state;
}