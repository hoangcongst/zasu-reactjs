export const SET_USER = 'SET_USER'
export const FETCH_USER = 'FETCH_USER'


export function fetchUser(page) {
   return {
      type: FETCH_USER,
      page
   };
}

export function setUser(data) {
   return {
      type: SET_USER,
      data
   };
}

export function logIn(data) {
    return {
        type: 'LOGIN',
        data
    }
}

export function logInSuccess(data) {
    return {
        type: 'LOGIN_SUCCESS',
        data
    }
}

export function logInError(data) {
    return {
        type: 'LOGIN_ERROR',
        data
    }
}

export function refreshToken(api_token) {
    return {
        type: 'REFRESH_TOKEN',
        api_token
    }
}

export function refreshTokenSuccess(api_token) {
    return {
        type: 'REFRESH_TOKEN_SUCCESS',
        api_token
    }
}

//get url of a guest access to site and set to state.redirectUrl
export function setRedirect(url) {
    return {
        type: 'SET_REDIRECT_URL',
        url
    }
}

export function setStatusLogin(status) {
    return {
        type: 'SET_STATUS_LOGIN',
        status
    }
}

export function register(formData) {
    return {
        type: 'REGISTER',
        formData
    }
}

export function registerSuccess(data) {
    return {
        type: 'REGISTER_SUCCESS',
        data
    }
}

export function registerError(data) {
    return {
        type: 'REGISTER_ERROR',
        data
    }
}

//check type account and set path /provider/... or /end-user/....
export function setPath(data) {
    return {
        type: 'SET_PATH',
        data
    }
}

export function refreshBalance(api_token) {
    return {
        type: 'REFRESH_BALANCE',
        api_token
    }
}

export function refreshBalanceSuccess(newBalance) {
    return {
        type: 'REFRESH_BALANCE_SUCCESS',
        newBalance
    }
}