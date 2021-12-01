import {MODAL_ACTIVE_REG, MODAL_UNACTIVE_REG} from '../actions'

export default function modalQizeEnd (state = false , action) {
    switch (action.type) {
        case MODAL_ACTIVE_REG:
            return true
        case MODAL_UNACTIVE_REG:
            return false
        default:
            return state
    }
}