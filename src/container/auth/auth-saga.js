import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as API from '../../api/backend'
import { logInSuccess, logInError, registerError,
    registerSuccess, refreshTokenSuccess, refreshBalanceSuccess } from '../../actions/action'
function* login(action) {
    try {
        let response = yield call(API.logIn, action);
        if (response.status === "success")
            yield put(logInSuccess({ status: "success", api_token: response.user.api_token,
                user: response.user, redirectUrl: action.data.redirectUrl }));
        else
            yield put(logInError({ status: "failed", message: response.notification }));

    } catch (e) {
        yield put(logInError({ status: "failed", message: e.message }));
    }
}

function* register(action) {
    try {
        let response = yield call(API.register, action);
        console.log(response)
        if (response.status === "success")
            yield put(registerSuccess({ status: "success", user: response.user }));
        else
            yield put(registerError({ status: "failed", message: response.errors }));

    } catch (e) {
        console.log(e.message)
        // yield put(registerError({ status: "failed", message: e.message }));
    }
}

function* refreshToken(action) {
    try {
        let response = yield call(API.refreshToken, action.api_token);
        if (response.status === "success")
            yield put(refreshTokenSuccess(response.api_token));
        else console.log('something error!')
        // else
        //     yield put(refreshTokenError({ status: "failed", message: response.errors }));

    } catch (e) {
        console.log(e.message)
        // yield put(registerError({ status: "failed", message: e.message }));
    }
}

function* refreshBalance(action) {
    try {
        let response = yield call(API.refreshBalance, action.api_token);
        if (response.status === "success")
            yield put(refreshBalanceSuccess(response.balance));
        else console.log('something error!')
        // else
        //     yield put(refreshTokenError({ status: "failed", message: response.errors }));

    } catch (e) {
        console.log(e.message)
        // yield put(registerError({ status: "failed", message: e.message }));
    }
}

function* authSaga() {
    yield takeLatest("LOGIN", login);
    yield takeLatest("REGISTER", register);
    yield takeLatest("REFRESH_TOKEN", refreshToken);
    yield takeEvery("REFRESH_BALANCE", refreshBalance);
}

export default authSaga;