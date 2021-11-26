import {MODAL_ACTIVE, MODAL_UNACTIVE} from '../actions'

export default function modal (state = false , action) {
    switch (action.type) {
        case MODAL_ACTIVE:
            return true
        case MODAL_UNACTIVE:
            return false
        default:
            return state
    }
}

