import {MODAL_ACTIVE_QIZE, MODAL_UNACTIVE_QIZE} from '../actions'

export default function modalHello (state = false , action) {
    switch (action.type) {
        case MODAL_ACTIVE_QIZE:
            return true
        case MODAL_UNACTIVE_QIZE:
            return false
        default:
            return state
    }
}