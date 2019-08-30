import React from 'react';

const TodoListItem = (props) => {

    const {item, index} = props
    return (

        <li className="list-group-item">
             {item}
            <button className="btn btn-danger" 
            onClick={() => props.removeFromItems(index)}>X</button>
        </li>
    )
};

export default TodoListItem;