export const MODAL_ACTIVE = 'MODAL_ACTIVE'
export const MODAL_UNACTIVE = 'MODAL_UNACTIVE'
export const MODAL_ACTIVE_HELLO = 'MODAL_ACTIVE_HELLO'
export const MODAL_UNACTIVE_HELLO = 'MODAL_UNACTIVE_HELLO'
export const MODAL_ACTIVE_QIZE = 'MODAL_ACTIVE_QIZE'
export const MODAL_UNACTIVE_QIZE = 'MODAL_UNACTIVE_QIZE'
export const MODAL_ACTIVE_QIZE_END = 'MODAL_ACTIVE_QIZE_END'
export const MODAL_UNACTIVE_QIZE_END = 'MODAL_UNACTIVE_QIZE_END'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SAVE_QIZE_ANSWER = 'SAVE_QIZE_ANSWER'
export const MODAL_ACTIVE_REG = 'MODAL_ACTIVE_REG'
export const MODAL_UNACTIVE_REG = 'MODAL_UNACTIVE_REG'
export const LOADER_ACTIVE = 'LOADER_ACTIVE'
export const LOADER_UNACTIVE = 'LOADER_UNACTIVE'

export const modalActive = () => ({type:MODAL_ACTIVE})
export const modalUnActive = () => ({type:MODAL_UNACTIVE})
export const modalActiveHel = () => ({type:MODAL_ACTIVE_HELLO})
export const modalUnActiveHel = () => ({type:MODAL_UNACTIVE_HELLO})
export const modalActiveQz = () => ({type:MODAL_ACTIVE_QIZE})
export const modalUnActiveQz = () => ({type:MODAL_UNACTIVE_QIZE})
export const modalActiveQzEnd = () => ({type:MODAL_ACTIVE_QIZE_END})
export const modalUnActiveQzEnd = () => ({type:MODAL_UNACTIVE_QIZE_END})
export const modalActiveReg = () => ({type:MODAL_ACTIVE_REG})
export const modalUnActiveReg = () => ({type:MODAL_UNACTIVE_REG})
export const logIn = () => ({type:LOG_IN})
export const logOut = () => ({type:LOG_OUT})
export const loaderActive = () => ({type:LOADER_ACTIVE})
export const loaderUnactive = () => ({type:LOADER_UNACTIVE})

export const saveQizeAnswer = (data) => ({
    type: SAVE_QIZE_ANSWER,
    payload: data,
})