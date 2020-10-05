import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaBook } from 'react-icons/fa'

import { connect } from 'react-redux'
import { addItem } from '../Actions/ActionCreators'

function TodoInput ({ item, isEnable, addItem }) {

    const [textInput, setTextInput] = useState(item)

    useEffect(()=>{
        setTextInput(item)
    }, [item])

    return (
    <div className="card">
        <div className="card-body">
        <form className="form-group">

            <div className="input-group mb-3">

                <div className="input-group-prepend">
                    <span className="input-group-text" style={{color: '#fff', background: '#007bff'}}>
                        <FaBook />
                    </span>
                </div>

                <input 
                    type="text"
                    className="form-control"
                    placeholder="Add a Todo Item"
                    value={textInput}
                    autoFocus
                    onChange={(e)=> setTextInput(e.target.value)}
                />

            </div>

            <button 
                type="submit" 
                className={ isEnable ? "btn btn-success btn-block" : "btn btn-primary btn-block"}
                disabled={textInput === '' ? true : false}
                onClick={(e)=>{
                    e.preventDefault()
                    addItem(textInput)
                    setTextInput('')
                }}
            >
                {isEnable ? 'Edit Item' : 'Add Item'}
            </button>

        </form>
        </div>
    </div>
    );
}

TodoInput.propTypes = {
    item: PropTypes.string.isRequired,
    isEnable: PropTypes.bool.isRequired,
    addItem: PropTypes.func.isRequired, 
}


export default connect( ({ ItemState:{ edit:{ item, isEnable} } })=>({ item, isEnable}), {
    addItem
})(TodoInput);
