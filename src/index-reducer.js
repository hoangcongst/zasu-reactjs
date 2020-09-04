import { combineReducers } from 'redux'
import auth from './container/auth/auth-reducer'
const thisApp = combineReducers({
  auth
})

export default thisApp