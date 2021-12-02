import {LOADER_ACTIVE, LOADER_UNACTIVE} from '../actions'

export default function modalQizeEnd (state = false , action) {
    switch (action.type) {
        case LOADER_ACTIVE:
            return true
        case LOADER_UNACTIVE:
            return false
        default:
            return state
    }
}