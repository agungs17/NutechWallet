import { BASE_URL } from '../../config/config'

export const loginService = async (body) => {
    const data = await fetch(BASE_URL + '/login', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return await data.json();
}

export const registerService = async (body) => {
    const data = await fetch(BASE_URL + '/registration', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return await data.json();
}

export const getProfileService = async (token) => {
    const data = await fetch(BASE_URL + '/getProfile', {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    return await data.json();
}

export const editProfileService = async (body, token) => {
    const data = await fetch(BASE_URL + '/updateProfile', {
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


