import {SAVE_QIZE_ANSWER} from '../actions'

export default function saveQize (state = {} , action) {
    switch (action.type) {
        case SAVE_QIZE_ANSWER:
            return {qizeAnswer: action.payload}
        default:
            return state
    }
}