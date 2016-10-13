import React, { Component } from 'react';
import axios from 'axios';

export default class TodoForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            processing: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <form className="input-group" onSubmit={this.handleSubmit}>
                        <input type="text"
                            placeholder="What do you want to accomplish.. ?"
                            className="form-control"
                            value={ this.state.todo }
                            onChange={ this.handleChange }/>
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-success " disabled={ this.state.processing }>Submit</button>
                        </span>
                    </form>
                </div>
            </div>
        );
    }

    handleChange(e) {
        this.setState({todo: e.target.value});
    }

    handleSubmit(e) {

        e.preventDefault();
        this.setState({
            processing: true
        });
        this.props.addTodo({
            user: 'chandan',
            todo: this.state.todo,
            isDone: false,
            hasAttachment: false
        }, () => {
            this.setState({
                todo: '',
                processing: false
            })
        })
    }
}
