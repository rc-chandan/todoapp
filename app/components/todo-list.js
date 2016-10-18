import React, { Component } from 'react';

import TodoListItem from './todo-list-item';
import LoadingSVG from '../images/hourglass.svg'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.renderTodos = this.renderTodos.bind(this);
    }

    render() {
        const todos = this.props.todos;
        if (todos === null){
            return (
                <div className="col-md-6 col-md-offset-3 text-center">
                    <LoadingSVG width={60} height={60} />
                </div>
            )
        }
        else if (todos.length === 0){
            return (
                <div className="col-md-6 col-md-offset-3 text-center">
                    <h1>You don't have any pending todos :)</h1>
                </div>
            );
        }
        else {
            return (
                <div className="col-md-10 col-md-offset-1 list-group">
                    { this.renderTodos(this.props) }
                </div>
            );
        }

    }

    renderTodos({ todos }) {
        return todos.map(todo => {
            return <TodoListItem key={ todo._id } todo={ todo } />;
        })
    }
}
