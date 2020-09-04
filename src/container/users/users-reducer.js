import {SET_USER} from '../../actions/action'

export default function (state = {}, action) {
    switch (action.type) {
        case SET_USER:
            // if (action.data.status === "success")
            return {
                list_user: action.data.list_user,
                count: action.data.count,
                page: action.data.page
            }

        default:
            return state
    }
}