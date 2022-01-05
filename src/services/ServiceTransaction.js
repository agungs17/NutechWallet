import { BASE_URL } from '../../config/config'

export const getBalanceService = async (token) => {
    const data = await fetch(BASE_URL + '/balance', {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return await data.json();
}

export const topUpService = async (body, token) => {
    const data = await fetch(BASE_URL + '/topup', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return await data.json();
}

export const transactionHistoryService = async (token) => {
    const data = await fetch(BASE_URL + '/transactionHistory', {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return await data.json();
}

export const postTransferService = async (body, token) => {
    const data = await fetch(BASE_URL + '/transfer', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return await data.json();
}