import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

import { connect } from 'react-redux'
import { clearList } from '../Actions/ActionCreators'
function TodoList({items, clearList}) {
    return (
        <div>

            <div className="card-body" style={{minWidth: '300px'}}>
                {
                    items.map((item)=> <TodoItem key={item.ID} item={item} /> )
                }
            </div>
            {items.length > 1 && 
                <div className="card-body">
                    <button 
                        className="btn btn-danger mt-3 mx-auto text-center btn-block text-uppercase"
                        onClick={(e)=> clearList()}
                    >
                        clear list
                    </button> 
                </div>
            }
            
        </div>
    );
}

TodoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(({ItemState:{items}})=> ({ items }),{
    clearList
})(TodoList)