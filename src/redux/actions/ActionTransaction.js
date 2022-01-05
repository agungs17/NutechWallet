import { getBalanceService, postTransferService, topUpService, transactionHistoryService } from "../../services"
import { Alert } from "react-native"
import { setLogout } from "."

export const setBalance = () => {
    return async (dispatch, getState) => {
        dispatch({ type: 'SET_BALANCE', loading: true, data: '' })
        if (getState().ReducerAuth.token) {
            const res = await new Promise((resolve, reject) => {
                getBalanceService(getState().ReducerAuth.token).then(async res => {
                    // resolve(res);
                    if (res.status == 0) {
                        return dispatch({ type: 'SET_BALANCE', loading: false, data: res.data.balance == null ? 0 : res.data.balance })
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

export const setTopUp = (body) => {
    return async (dispatch, getState) => {
        if (getState().ReducerAuth.token) {
            const res = await new Promise((resolve, reject) => {
                topUpService(body, getState().ReducerAuth.token).then(async res => {
                    resolve(res);
                    if (res.status == 0) {
                        return dispatch(setBalance())
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

export const setTrasaction = () => {
    return async (dispatch, getState) => {
        dispatch({ type: 'SET_TRANSACTION', loading: true, data: '' })
        if (getState().ReducerAuth.token) {
            const res = await new Promise((resolve, reject) => {
                transactionHistoryService(getState().ReducerAuth.token).then(async res => {
                    resolve(res);
                    if (res.status == 0) {
                        return dispatch({ type: 'SET_TRANSACTION', loading: false, data: res.data })
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

export const setTransfer = (body) => {
    return async (dispatch, getState) => {
        if (getState().ReducerAuth.token) {
            const res = await new Promise((resolve, reject) => {
                postTransferService(body, getState().ReducerAuth.token).then(async res => {
                    resolve(res);
                    if (res.status == 0) {
                        // dispatch(setTrasaction())
                        dispatch(setBalance())
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

