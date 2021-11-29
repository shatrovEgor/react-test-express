import {LOG_IN, LOG_OUT} from '../actions'

export default function auth (state = false , action) {
    switch (action.type) {
        case LOG_IN:
            return true
        case LOG_OUT:
            return false
        default:
            return state
    }
}
