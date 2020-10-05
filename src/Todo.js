import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import TodoInput from './Component/TodoInput'
import TodoList from './Component/TodoList'

function Todo({items}) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto col-md-10 col-sm-12 mt-5">

                        <h3 className="text-capitalize text-center mb-3">Todo Input</h3>
                        <TodoInput />

                        {items.length ? <h3 className="text-capitalize text-center my-4">Todo List</h3> : null}
                        {items.length ? <TodoList /> : null}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

Todo.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect( ({ItemState:{ items }})=>({ items }))(Todo)