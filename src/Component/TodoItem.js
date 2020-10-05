import React from 'react'
import PropTypes from 'prop-types'
import { MdEdit, MdDelete } from "react-icons/md";


import { connect } from 'react-redux'
import { editItem, removeItem } from '../Actions/ActionCreators'

function TodoItem({item, editItem, removeItem }) {

    return (
        <li className="item list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{item.title}</h6>
            <div className="todo-icon">

                <i 
                    className="edit"
                    onClick={(e)=>{editItem(item.ID)}} 
                >
                    <MdEdit />
                </i>
                
                <i 
                    className="remove"
                    onClick={ (e)=> removeItem(item.ID) }
                >
                    <MdDelete />
                </i>

            </div>
        </li>
    );
}


TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    editItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
}

export default connect( null, {
    editItem, removeItem
})(TodoItem)