export default function (state = {}, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                isLogged: true,
                redirectUrl: action.data.redirectUrl,
                user: action.data.user
            })
        case 'LOGIN_ERROR':
            let notification = ""
            if (action.data.message === 1)
                notification = ["Wrong Password!"]
            else if (action.data.message === 0)
                notification = ["User did not exist!"]
            return Object.assign({}, state, {
                isLogged: false,
                notification: notification
            })

        case 'REGISTER_SUCCESS':
            return Object.assign({}, state, {
                isLogged: true,
                user: action.data.user
            })
        case 'REGISTER_ERROR':
            return Object.assign({}, state, {
                isLogged: false,
                notification: action.data.message
            })
        case 'SET_REDIRECT_URL':
            return Object.assign({}, state, { redirectUrl: action.url })

        case 'SET_STATUS_LOGIN':
            return Object.assign({}, state, {
                isLogged: action.status
            })

        case 'REFRESH_TOKEN_SUCCESS':
            let newState = Object.assign({}, state)
            newState.user.api_token = action.api_token
            return newState

        case 'REFRESH_BALANCE_SUCCESS':
            let nState = Object.assign({}, state)
            nState.user.balance = action.newBalance
            return nState
        default:
            return state
    }
}