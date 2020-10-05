
import uuid from 'uuid/v4'
import { ADD_ITEM, CLEAR_LIST, EDIT_ITEM, REMOVE_ITEM } from './ActionTypes'

// Item Action Creators
export const addItem = (data)=>{
    return { 
        type: ADD_ITEM, 
        payload: data,
        ID: uuid()
    }
}

export const editItem = (ID)=>{
    return {
        type: EDIT_ITEM,
        ID
    }
}

export const removeItem = (ID)=>{
    return {
        type: REMOVE_ITEM,
        ID
    }
}

export const clearList = ()=>{
    return { type: CLEAR_LIST }
}
