import React, { Component } from 'react'

export default class Lists extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            data: []
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    insertToData = () => {
        const arr = this.state.data
        arr.push(this.state.name)

        this.setState({
            name: '',
            data: arr,
        })
        // this.setState({
        //     data: [ this.state.name, ...this.state.data],
        //     name: ''
        // })

        console.log(this.state.data)
    }
    render() {
        const {name, age, data} = this.state
        return (
            <div>
                <input type="text" placeholder="nome" name="name" onChange={this.handleChange}/>
                <input type="text" placeholder="idade" name="age" onChange={this.handleChange}/>
                <button type="button" onClick={this.insertToData} >Ok!</button>

                <p>{name}</p>
                <p>{age}</p>
                <ul>
                    {
                            data.map(item => (
                                <li key={item}>{item}</li>
                            ))
                    }
                </ul>
                
            </div>
        )
    }
}
