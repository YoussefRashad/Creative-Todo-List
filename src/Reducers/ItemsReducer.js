
import { ADD_ITEM, CLEAR_LIST, EDIT_ITEM, REMOVE_ITEM } from '../Actions/ActionTypes'

const defaultState = {
    items: [],
    edit:{
        isEnable : false,
        item: '',
        ID: ''
    }
}

const reducer = ( state=defaultState, action )=>{
    state.items = localStorage.getItem('todoItems') ? JSON.parse(localStorage.getItem('todoItems')) : []
    switch( action.type ){
        case ADD_ITEM :
            const itemsAdded = [...state.items, {title: action.payload, ID: action.ID}]
            localStorage.setItem('todoItems', JSON.stringify(itemsAdded))
            return { ...state, items: itemsAdded, edit:{
                            isEnable: false, item: '', ID: ''
                        }
                    };

        case EDIT_ITEM :
            const item = state.items.find((item)=> item.ID === action.ID)
            const EditedItems = state.items.filter((item)=> item.ID !== action.ID)
            localStorage.setItem('todoItems', JSON.stringify(EditedItems))
            return { ...state, items: EditedItems, edit:{
                    isEnable: true, item: item.title, ID: item.ID
                }}

        case REMOVE_ITEM:
            const removedItems = state.items.filter((item)=> item.ID !== action.ID)
            localStorage.setItem('todoItems', JSON.stringify(removedItems))
            return { ...state, items: removedItems}

        case CLEAR_LIST :
            localStorage.removeItem('todoItems')
            return { ...state, items:[], edit:{
                isEnable: false, item: '', ID: ''
            }}

        default:
            return state
    }
}

export default reducer