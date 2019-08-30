import React, { Component } from 'react'

export default class TodoForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todo: ''
        }
    }

    onAdd = (event) => {
        event.preventDefault();
        const { todo } = this.state
        if(todo) {
            this.props.pushToItems(this.state.todo);
            this.setState({
                todo: ''
            })
        }
    }

    onChange = (event) => {
        this.setState({todo: event.target.value})
    }

    render() {
        return (
        <div>
            <div className="form-group">
                <input className="form-control" type="text"
                name="todo"
                value={this.state.todo}
                placeholder="Enter tarefa" onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <button className="btn btn-success" type="button" 
                onClick={this.onAdd}>Create</button>
            </div>

        </div>
        )
    }
}

