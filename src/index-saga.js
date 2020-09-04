import fetchUserSaga from './container/users/users-saga'
import authSaga from './container/auth/auth-saga'
export default function* rootSaga() {
  yield [
    fetchUserSaga(),
    authSaga()
  ]
}