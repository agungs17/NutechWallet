import { Alert } from "react-native"
import { loginService, getProfileService } from "../../services"

export const setLogin = (body) => {
    return async (dispatch, getState) => {
        const res = await new Promise((resolve, reject) => {
            loginService(body).then(async res => {
                // resolve(res);
                if (res.status == 0) {
                    return dispatch({ type: 'IS_LOGIN', isLogin: true, profile: res.data, token: res.data.token })
                } else {
                    Alert.alert('Error!', res.message)
                }
            }).catch(err => {
                Alert.alert('Error!', 'Something has error!')
            })
        })
        return res;
    }
}

export const setProfile = () => {
    // sebenarnya bisa pakai set interval untuk 1 api handle expired token dan lebih dinamis
    return async (dispatch, getState) => {
        if (getState().ReducerAuth.token) {
            const res = await new Promise((resolve, reject) => {
                getProfileService(getState().ReducerAuth.token).then(async res => {
                    // resolve(res);
                    if (res.status == 0) {
                        return dispatch({ type: 'SET_PROFILE', isLogin: true, profile: { ...res.data, email: getState().ReducerAuth.profile.email } })
                    } else {
                        Alert.alert(
                            "Error!",
                            res.message,
                        );
                        if (res.status == 108) {
                            return dispatch(setLogout());
                         }
                    }
                }).catch(err => {
                    Alert.alert('Error!', 'Something has error!')
                })
            })
            return res;
        }
    }
}

export const setLogout = () => (dispatch) => {
    return dispatch({ type: 'RESET' })
}