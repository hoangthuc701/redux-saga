import * as Modaltypes from '../constants/modal'

export const showModal = ()=>({
    type: Modaltypes.SHOW_MODAL,
})

export const hideModal = ()=>({
    type: Modaltypes.HIDE_MODAL,
})


export const changeModalTitle = (title)=>({
    type: Modaltypes.CHANGE_MODAL_TITLE,
    payload:{
        title
    }
})
export const changeModalContent = (component)=>({
    type: Modaltypes.CHANGE_MODEL_CONTENT,
    payload:{
        component,
    }
})
