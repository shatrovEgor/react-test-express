import {MODAL_ACTIVE_HELLO, MODAL_UNACTIVE_HELLO} from '../actions'

export default function modalHello (state = true , action) {
    switch (action.type) {
        case MODAL_ACTIVE_HELLO:
            return true
        case MODAL_UNACTIVE_HELLO:
            return false
        default:
            return state
    }
}