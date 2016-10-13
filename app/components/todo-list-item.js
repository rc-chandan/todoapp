import React, { Component } from 'react';

const TodoListItem = ({ todo, completeTodo, removeTodo }) => {
    return (
        <div className="list-group-item">
            { todo.todo }
            <div className="pull-right">
                <button className="btn btn-primary" onClick={ completeTodo }>
                    <span className="glyphicon glyphicon-ok"></span> Done
                </button>
                <button className="btn btn-danger" onClick={ removeTodo }>
                    <span className="glyphicon glyphicon-remove"></span> Remove
                </button>
            </div>
        </div>
    );
}

export default TodoListItem;
