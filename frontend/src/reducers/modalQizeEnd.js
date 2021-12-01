import {MODAL_ACTIVE_QIZE_END, MODAL_UNACTIVE_QIZE_END} from '../actions'

export default function modalQizeEnd (state = false , action) {
    switch (action.type) {
        case MODAL_ACTIVE_QIZE_END:
            return true
        case MODAL_UNACTIVE_QIZE_END:
            return false
        default:
            return state
    }
}