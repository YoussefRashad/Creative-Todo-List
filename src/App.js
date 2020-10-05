import React from 'react'
import './App.css'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import ItemReducer from './Reducers/ItemsReducer'
import TodoComponent from './Todo'

const Store = createStore(combineReducers({
  ItemState: ItemReducer,
}), composeWithDevTools());

export default function App() {
  return (
    <Provider store={Store}>
      <TodoComponent />
    </Provider>
  )
}
