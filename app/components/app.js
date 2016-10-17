import React, { Component } from 'react';
import co from 'co';

import TodoForm from './todo-form';
import NavBar from './nav-bar';
import TodoList from './todo-list';

import axios from 'axios';

const base = 'https://node-todolist-api.herokuapp.com';

export default class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            todos: []
        }

        this.getTodos = this.getTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);

        this.getTodos();
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <TodoForm addTodo={ this.addTodo }/>
                    <hr />
                    <TodoList todos={ this.state.todos }/>
                </div>
            </div>
        );
    }

    addTodo(todo, callback) {
        axios.post(`${base}/api/todos`, todo)
            .then(response => {
                this.getTodos();
                callback();
            })
            .catch(err => console.log(err.stack));
    }

    // Example of ES6 Generators for async task using co generator wrapper library
    getTodos () {
        let app = this;

        co(function* () {
            let todos = (yield axios.get(`${base}/api/todos`)).data;
            app.setState({todos});
        }).catch(err => console.log(err.stack));
    }

    deleteTodo() {

    }


}
