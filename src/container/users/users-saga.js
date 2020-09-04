import { call, put, takeEvery } from 'redux-saga/effects'
import * as API from '../../api/backend'

// worker Saga: will be fired on FETCH_USER actions
function* fetchUser(action) {
    try {
        let data = yield call(API.fetchUser, action.page);
        yield put({ type: "SET_USER", data: { status: "success", list_user: data.list_user, count: data.count, page: data.page } });
    } catch (e) {
        yield put({ type: "SET_USER", data: { status: "failed", message: e.message } });
    }
}

/*
  Starts fetchUser on each dispatched `FETCH_USER` action.
  Allows concurrent fetches of user.
*/
function* fetchUserSaga() {
    yield takeEvery("FETCH_USER", fetchUser);
}

export default fetchUserSaga;