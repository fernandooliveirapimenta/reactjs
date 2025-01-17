import React, { Component } from 'react'
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import ContainerApp from './ContainerApp';
import BindDinamic from '../components/BindDinamic';

export default class TodoApp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [] 

        }
    }

    pushToItems = (todo) => {
        const {items} = this.state
        this.setState(
            {
                items: [...items, todo]
            }
        )
    }

    removeFromItems = (index) => {
        const {items} = this.state;
        items.splice(index, 1)

        this.setState({
            items 
        })
    }
    render() {
        const { items } = this.state
        return (
            <ContainerApp>
                <div className="col-xs-12 col-md-12">
                    <h2>Todolist</h2>
                </div>
                <div className="col-xs-12 col-md-12">
                    <TodoForm pushToItems={this.pushToItems}/>
                <hr/>
                </div>
                <div className="col-xs-12 col-md-12">
                    <TodoList items={items}
                    removeFromItems={this.removeFromItems}/>
                </div>
                <div className="col-xs-12 col-md-12">
                    <BindDinamic></BindDinamic>
                </div>
            </ContainerApp>
        )
    }
}
