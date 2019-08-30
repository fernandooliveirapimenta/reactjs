import React, { Component } from 'react'

export default class BindDinamic extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            idade: '',
            check: false
        }
    }

    changeDinamico = (event) => {

        const {target} = event
        const {name} = target
        const value = target.type === 'checkbox'
         ? target.checked : target.value

        return this.setState({
            [name]: value 
        }) 

    }

    render() {
        console.log(this.state)
        return (
            <div>
                <input type="text" name="nome" onChange={this.changeDinamico}></input>
                <input type="text" name="idade" onChange={this.changeDinamico}></input>
                <input type="checkbox" name="check" onChange={this.changeDinamico}></input>
            </div>
        )
    }
}
